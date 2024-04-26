/**
 * Enable SSL/TLS key logging globally based on the `SSLKEYLOGFILE` envrionment variable.
 *
 * @module
 */

import { enableSSLKeyLog } from ".";

if (process.env.SSLKEYLOGFILE) {
  enableSSLKeyLog(process.env.SSLKEYLOGFILE);
}
