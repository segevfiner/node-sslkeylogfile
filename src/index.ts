import fs from "node:fs/promises";
import net from "node:net";
import stream from "node:stream";
import tls from "node:tls";
import module from "node:module";

/**
 * Enable SSL/TLS key logging for all connections using the builtin `tls` module to the given file.
 */
export function enableSSLKeyLog(keylogFilename: string): void {
  const keylog = fs.open(keylogFilename, "a", 0o600);

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

  module.syncBuiltinESMExports();
}

export const enableTLSKeyLog = enableSSLKeyLog;
