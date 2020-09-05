const Promise = require("bluebird");
const mysql = require("mysql");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const DB_CONFIG = {
  host: "localhost",
  user: "root",
  password: "",
  database: "read"
};

let addRecord = async () => {
  console.log("Success")
  try {
    const connection = mysql.createConnection(DB_CONFIG);
    await connection.connectAsync();

    // LOGIC
    let sql =
      "INSERT INTO student (id,name,email,address) VALUES (?,?, ?, ?)";
    let operation = await connection.queryAsync(sql, [
      "",
      "Ron",
      "Ron@g",
      "Madrid",
    ]);

    await connection.endAsync();
    return operation;
  } catch (err) {
    console.log(err);
  }



};

addRecord();