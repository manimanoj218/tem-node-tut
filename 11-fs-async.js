const fs = require("fs");

fs.readFile("./content/first.txt", "utf8", (err, res) => {
  if (err) {
    return;
  }
  const first = res;
  fs.readFile("./content/second.txt", "utf8", (err, res) => {
    if (err) {
      return;
    }
    const second = res;

    fs.writeFile(
      "./content/result-async.txt",
      `Here is the file : ${first} ${second}`,
      (err, res) => {
        if (err) {
          return;
        }
      }
    );
  });
});
