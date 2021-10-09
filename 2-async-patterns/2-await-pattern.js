const fs = require("fs").promises;

// const util = require("util");
// const readFilePromise = util.promisify(fs.readFile);
// const writeFilePromise = util.promisify(fs.writeFile);

const start = async () => {
  try {
    let first = await fs.readFile("./content/first.txt", "utf8");
    let second = await fs.readFile("./content/second.txt", "utf8");
    await fs.writeFile(
      "./content/result-mind-grenade.txt",
      `this is awesome ${first} ${second}`,
      { flag: "a" }
    );
    console.log(`${first}${second}`);
  } catch (error) {
    console.log(error);
  }
};

start();

// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     fs.readFile(path, "utf8", (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };
// getText("./content/first.txt")
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));
