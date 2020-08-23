const path = require('path');

const pathobj = path.parse(__filename);

console.log(pathobj);

//path module give us information about  the address of file. parse method is used to convert the whole path into object notation