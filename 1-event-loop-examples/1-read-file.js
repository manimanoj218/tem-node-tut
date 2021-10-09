const fs = require("fs");
console.log("Started first task");

fs.readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(result);
  console.log("completed the task");
});
console.log("Started second task");