const fs = require("fs");

let readDemo = () => {
  console.log("Read File");

  const filepath = "C:/Users/Akshay/Desktop/hi.txt"

  fs.readFile(filepath, { encoding: "utf-8" }, (err, data) => {
    //file reads first then call back fn is called
    //error can be occured such as file is not found in mentioned path

    console.log(data); // whatever instructions present inside in the call back fn it executes later


  }); //fs.readfile() is a non-blocking eg.evry tab in browser is non-blocking

}

//fs.readfilesync() Non-Blocking if suppose our file is 1gb the prog will not process another operation it will process operation after finishing first. 
let writeDemo = () => {
  console.log("write File");
}


module.exports = { readDemo, writeDemo };