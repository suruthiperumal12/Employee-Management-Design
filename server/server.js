const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const app = express();
app.use(express.json()); // Correct usage of express.json() middleware
app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "employeeinfo",
});

// Connect to the database
db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err.stack);
    return;
  }
  console.log("Connected to the database.");
});

app.get("/", (req, res) => {
  const sql = "SELECT * FROM employees";
  db.query(sql, (err, data) => {
    if (err) {
      console.error("Database error:", err);
      return res.status(500).json("Error");
    }
    return res.json(data);
  });
});

app.post("/create", (req, res) => {
  const sql =
    "INSERT INTO employees(`empID`,`name`,`department`,`designation`,`project`,`type`,`status`) VALUES (?,?,?,?,?,?,?)";
  const values = [
    req.body.empID,
    req.body.name,
    req.body.department,
    req.body.designation,
    req.body.project,
    req.body.type,
    req.body.status,
  ];

  db.query(sql, values, (err, data) => {
    if (err) {
      console.error("Database error:", err);
      return res.status(500).json("Error");
    }
    return res.json(data);
  });
});

app.put("/update/:empID", (req, res) => {
  const empID = req.params.empID;
  const sql =
    "UPDATE employees SET `name`=?, `department`=?, `designation`=?, `project`=?, `type`=?, `status`=? WHERE `empID`=?";

  const values = [
    req.body.name,
    req.body.department,
    req.body.designation,
    req.body.project,
    req.body.type,
    req.body.status,
    empID,
  ];

  db.query(sql, values, (err, data) => {
    if (err) {
      console.error("Database error:", err);
      return res.status(500).json("Error");
    }
    return res.json(data);
  });
});

app.delete("/delete/:empID", (req, res) => {
  const empID = req.params.empID;
  const sql = "DELETE FROM employees WHERE empID=?";
  db.query(sql, [empID], (err, data) => {
    if (err) {
      return res.status(500).json({ error: "Database error" });
    }
    return res.json({ success: true, data });
  });
});

app.listen(8082, () => {
  console.log("Server is running on http://localhost:8082");
});
