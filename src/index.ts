import fs from "node:fs/promises";
import net from "node:net";
import stream from "node:stream";
import tls from "node:tls";
import module from "node:module";

let keylog: Promise<fs.FileHandle> | null = null;
if (process.env.SSLKEYLOGFILE) {
  keylog = fs.open(process.env.SSLKEYLOGFILE, "a", 0o600);
}

if (keylog) {
  tls.TLSSocket = class MyTLSSocket extends tls.TLSSocket {
    constructor(
      socket: net.Socket | stream.Duplex,
      options?: tls.TLSSocketOptions
    ) {
      super(socket, options);

      this.on("keylog", async (line) => {
        void keylog!.then(async (keylog) => {
          await keylog.appendFile(line);
        });
      });
    }
  };

  const origConnect = tls.connect;
  tls.connect = function connect(...args: any) {
    const tlssock = origConnect.apply(this, args);

    tlssock.on("keylog", (line) => {
      void keylog!.then(async (keylog) => {
        await keylog.appendFile(line);
      });
    });

    return tlssock;
  };
}

module.syncBuiltinESMExports();
