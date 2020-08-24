const http = require("http");

const mod = require("./run1");
const { resolveSoa } = require("dns");

http.createServer((req, res) => {

  const resp = JSON.stringify(mod.list);

  console.log("hello");

  res.end(resp);
})
  .listen(5000);