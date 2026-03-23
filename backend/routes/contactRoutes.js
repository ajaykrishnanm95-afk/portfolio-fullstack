const express = require("express");
const router = express.Router();
const controller = require("../controllers/contactController");

// TEST ROUTE
router.get("/", (req, res) => {
  res.send("API working 🚀");
});

// MAIN ROUTES
router.post("/contact", controller.submitForm);
router.get("/admin/messages", controller.getMessages);

module.exports = router;