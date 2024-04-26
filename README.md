# sslkeylogfile
Enable SSL/TLS key logging for all connections globally.

This is similar to using the
[`--tls-keylog`](https://nodejs.org/docs/latest-v20.x/api/cli.html#--tls-keylogfile) flag of
Node.js, but can be controlled by JavaScript.

## Usage
```ts
import { enableSSLKeyLog } from "sslkeylogfile";

enableSSLKeyLog("path/to/keylog.txt");
```

Or to enable based on the `SSLKEYLOGFILE` environment variable:
```ts
import "sslkeylogfile/global";
```

You can then configure Wireshark to use the resulting file as the "(Pre)-Master-Secret log filename" (See [Using the (Pre)-Master-Secret](https://wiki.wireshark.org/TLS#using-the-pre-master-secret)).

## License
MIT
