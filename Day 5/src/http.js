//http module : acts as an http servr

// we can create our own server

const http = require('http');

const svr = http.createServer((req, res) => {

  res.write(JSON.stringify(['Dhanjay', "mane"]));
  //res.write(JSON.stringify('Parvti', "mane"));
  res.end();



});

svr.listen(3000);


// to view op localhost:3000/res stringify helps us to convert dataq into text/string this is used to upload from local to server