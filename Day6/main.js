
//require("./mod1");//this is localmodule.module could be local/internal/external


const ab = require("./mod1");

const app = require("./mod2");
//require("http") //internal module


//console.log(ab);



console.log("I am main function");


//values from mod2

console.log(app);

