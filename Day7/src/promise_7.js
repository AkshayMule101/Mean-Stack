/*promise using async and ajax*/

const fs = require("fs");

const Promise = require("bluebird");

Promise.promisifyAll(fs);


let readDemo = async () => {
  console.log("Good Morning");

  const filepath = "C:/Users/Akshay/Desktop/hi.txt";
  const data1 = await fs.readFileAsync(filepath, { encoding: "utf-8" });

  console.log(data1)

  //await fs.readFileAsync();
};


readDemo();

