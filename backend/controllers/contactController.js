const model = require("../models/contactModel");

exports.submitForm = (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).send("All fields required");
  }

  model.saveMessage({ name, email, message }, (err) => {
    if (err) {
      console.log(err);
      return res.status(500).send("Error saving data");
    }
    res.send("Message saved successfully 🎉");
  });
};

exports.getMessages = (req, res) => {
  model.getMessages((err, data) => {
    if (err) {
      console.log("CONTROLLER ERROR:", err); // 👈 ADD THIS
      return res.status(500).send("Error fetching");
    }
    console.log("DATA:", data); // 👈 ADD THIS
    res.json(data);
  });
};