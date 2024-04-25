import "sslkeylogfile/global";
import https from "node:https";

const foo = https.get("https://www.google.com/");
foo.on("response", (resp) => {
  console.log(resp.statusCode);
});

console.log((await fetch("https://www.google.com/")).status);
