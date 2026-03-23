const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "contact_app"
});

db.connect((err) => {
  if (err) {
    console.log("Connection failed:", err);
  } else {
    console.log("Connected to MySQL 🎉");
  }
});

module.exports = db;