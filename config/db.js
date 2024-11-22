const mysql = require("mysql");
require("dotenv").config(); // Load environment variables

// Create the database connection
const db = mysql.createConnection({
  host: process.env.DB_HOST, // Database host (e.g., localhost)
  user: process.env.DB_USER, // MySQL username (e.g., root)
  password: process.env.DB_PASSWORD, // MySQL password
  database: process.env.DB_NAME, // Database name (e.g., school_management)
});

// Connect to the database
db.connect((err) => {
  if (err) {
    console.error("Database connection failed: ", err.message);
    process.exit(1);
  }
  console.log("Connected to the MySQL database.");
});

module.exports = db;
