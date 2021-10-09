// const _ = require("lodash");

// const items = [1, [2, [3, [4]]]];
// const newItems = _.flattenDeep(items);
// console.log("newItmes", newItems);
// console.log("hello world");
// setInterval(() => {
//   console.log("Hello world");
// }, 2000);

// console.log("I will log first");
const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Home Page");
  }
  if (req.url === "/about") {
    // Blocking code
    for (let i = 0; i < 1000; i++) {
      for (let j = 0; j < 1000; j++) {
        console.log(`${i}${j}`);
      }
    }
    res.end("About Page");
  }
  res.end("Error Page");
});

server.listen(5000, () => {
  console.log("server is listening at port :5000");
});
