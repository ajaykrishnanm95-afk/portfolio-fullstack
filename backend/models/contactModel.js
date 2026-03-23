const db = require("../config/db"); 

exports.saveMessage = (data, callback) => {
  const sql = "INSERT INTO messages (name, email, message) VALUES (?, ?, ?)";
  db.query(sql, [data.name, data.email, data.message], callback);
};

exports.getMessages = (callback) => {
  db.query("SELECT * FROM messages", (err, results) => {
    if (err) {
      console.log("DB ERROR:", err);
      return callback(err, null);
    }
    callback(null, results);
  });
};