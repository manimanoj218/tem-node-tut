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
const fs = require("fs");

const server = http.createServer((req, res) => {
  // const text = fs.readFileSync("./content/big.txt", "utf8");
  // res.end(text);

  const fileStream = fs.createReadStream("./content/big.txt", "utf8");
  fileStream.on("open", () => {
    fileStream.pipe(res);
  });
  fileStream.on("error", (err) => {
    console.log("error", err);
  });
});

server.listen(5000);
