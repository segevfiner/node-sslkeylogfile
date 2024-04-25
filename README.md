# sslkeylogfile
Enable SSL/TLS key logging for all connections globally.

## Usage
```ts
import { enableSSLKeyLog } from "sslkeylogfile";

enableSSLKeyLog("path/to/keylog.txt");
```

Or to enable based on the `SSLKEYLOGFILE` environment variable:
```ts
import "sslkeylogfile/global";
```
