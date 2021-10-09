const http = require("http");

const server = http.createServer();

server.on("request", (req, res) => {
  if (req.url === "/") {
    res.end("welcome");
  }
  if (req.url === "/about") {
    res.end("About Page");
  }
});

server.listen(5000);
