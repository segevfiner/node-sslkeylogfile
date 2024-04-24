import { enableSSLKeyLog } from ".";

if (process.env.SSLKEYLOGFILE) {
  enableSSLKeyLog(process.env.SSLKEYLOGFILE);
}
