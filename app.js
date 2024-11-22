const express = require("express");
const app = express();

require("dotenv").config();

const bodyParser = require("body-parser");
const cors = require("cors");

const db = require("./config/db"); // Import database configuration

const schoolRoutes = require("./routes/schoolRoutes");

// Middleware
app.use(cors());
app.use(bodyParser.json());

app.use(express.json()); // Parse JSON requests

// Routes
app.use("/api", schoolRoutes);

// Example route to test the database connection
app.get("/test", (req, res) => {
  db.query("SELECT 1 + 1 AS solution", (err, results) => {
    if (err) {
      console.error("Error executing query:", err);
      return res.status(500).send("Database query failed");
    }
    res.send(
      `Database connected successfully. Test query result: ${results[0].solution}`
    );
  });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
