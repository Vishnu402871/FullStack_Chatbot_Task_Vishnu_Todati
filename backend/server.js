const express = require("express");
const cors = require("cors");
const db = require("./database");

const app = express();

app.use(cors());
app.use(express.json());

// Home Route
app.get("/", (req, res) => {
  res.send("Backend Running");
});

// Get All Enquiries + Search
app.get("/api/enquiries", (req, res) => {
  const search = req.query.search || "";

  db.all(
    `
    SELECT * FROM enquiries
    WHERE name LIKE ?
       OR email LIKE ?
       OR phone LIKE ?
    ORDER BY id DESC
    `,
    [`%${search}%`, `%${search}%`, `%${search}%`],
    (err, rows) => {
      if (err) {
        return res.status(500).json(err);
      }

      res.json(rows);
    }
  );
});

// Create Enquiry
app.post("/api/enquiries", (req, res) => {
  const { name, email, phone, message } = req.body;

  db.run(
    `
    INSERT INTO enquiries
    (name, email, phone, message)
    VALUES (?, ?, ?, ?)
    `,
    [name, email, phone, message],
    function (err) {
      if (err) {
        return res.status(500).json(err);
      }

      res.json({
        success: true,
        id: this.lastID,
      });
    }
  );
});

// Update Status
app.put("/api/enquiries/:id", (req, res) => {
  const { status } = req.body;

  db.run(
    `
    UPDATE enquiries
    SET status = ?
    WHERE id = ?
    `,
    [status, req.params.id],
    function (err) {
      if (err) {
        return res.status(500).json(err);
      }

      res.json({
        success: true,
      });
    }
  );
});

// Delete Enquiry
app.delete("/api/enquiries/:id", (req, res) => {
  db.run(
    `
    DELETE FROM enquiries
    WHERE id = ?
    `,
    [req.params.id],
    function (err) {
      if (err) {
        return res.status(500).json(err);
      }

      res.json({
        success: true,
      });
    }
  );
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});