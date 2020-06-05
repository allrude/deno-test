import { helloWorld } from "https://raw.githubusercontent.com/allrude/deno-test/master/index.js?token=AAALSL6IACIXVNEKFDY2YL263ISDK";
const s = serve({ port: 8000 });
console.log("http://localhost:8000/");
for await (const req of s) {
  req.respond({
    body: `
  Hello World
  is there a reason
  Ruud van Zuidam
  `,
  });
}
