const Promise = require("bluebird");
const mysql = require("mysql");

// Promisifying the mysql module methods.
Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

let helloDatabase = async () => {
  const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "abc",
  });

  // connection open
  await connection.connectAsync(); // promise

  // let query
  let sql =
    "INSERT INTO manager VALUES(?,?,?)";
  let operation = await connection.queryAsync(sql, [
    "",
    "Ron",
    "London",
  ]);

  // close the connection
  connection.end();


};

helloDatabase();