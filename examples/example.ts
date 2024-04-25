import "sslkeylogfile/global";
import https from "node:https";

const req = https.get("https://www.google.com/");
req.on("response", (resp) => {
  console.log(resp.statusCode);
});

console.log((await fetch("https://www.google.com/")).status);
