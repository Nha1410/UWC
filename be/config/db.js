const mysql = require("mysql");

async function connect() {
  try {
    await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
    });
    console.log("connection success");
  } catch (error) {
    console.log(error);
    console.log("connect db failed");
  }
}

module.exports = { connect };
