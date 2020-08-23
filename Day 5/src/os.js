//OS Module 

//OS Module Gives Info about the Operating Sys

const os = require('os');

var totalmemory = os.totalmem();

var freememory = os.freemem();

console.log("totalmemory =", totalmemory);

console.log("freememory =", freememory);