const fs = require("fs");

const Promise = require("bluebird");

//promisification: converts  all the callback methods and return as promise

Promise.promisifyAll(fs);

let readDemo = () => {
  const filepath = "C:/Users/Akshay/Desktop/hi.txt";

  const mpromise = fs.readFileAsync(filepath, { encoding: "utf-8" });

  console.log(mpromise);

  //resolve

  mpromise.then((data) => {
    console.log(data);

  });



  //reject
  mpromise.catch((err) => {
    console.log(err);
  });



};

readDemo(); 