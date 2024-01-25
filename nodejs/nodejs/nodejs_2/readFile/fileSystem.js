const fs = require("fs");

//linea abajo solo es para asincrona con promesas
const fsPromise = require("fs/promises");

//traer fichero , sincrona
const files = fs.readdirSync("C:\\Users\\dista\\Desktop\\empresa2");
console.log("SYNC", files);

// asincrona con callback
fs.readdir("C:\\Users\\dista\\Desktop\\empresa2", (error, files) => {
  console.log("Error", error);
  console.log("ASYNC", files);
});

//asincrona con promesas
fsPromise
  .readdir("C:\\Users\\dista\\Desktop\\empresa2")
  .then((files) => console.log("PROMISE", files))
  .catch((err) => console.log(err));

//Async-await
(async () => {
  await fsPromise.readdir("C:\\Users\\dista\\Desktop\\empresa2");
  console.log("AWAIT", files);
})();
