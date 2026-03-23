const express = require("express");
const router = express.Router();

const { Pool } = require("pg");

// Neon DB connection
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

// POST route
router.post("/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const result = await pool.query(
      "INSERT INTO messages (name, email, message) VALUES ($1, $2, $3) RETURNING *",
      [name, email, message]
    );

    res.status(200).json({
      success: true,
      data: result.rows[0],
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "Database error",
    });
  }
});

module.exports = router;