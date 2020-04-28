const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());

/************************DATABASE CONNECTIVITY*************************/
const mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  user: "nayan",
  password: "Nayan@10",
  database: "crud_db",
});

connection.connect((err) => {
  if (err) {
    console.log("error connecting to database...");
    return;
  }
  console.log("connected as id " + connection.threadId);
});

/**************************************************************************/

app.get("/", (req, res) => {
  res.send("<h1>Hi There</h1?");
});

// get all
app.get("/user", (req, res) => {
  connection.query("SELECT * FROM user_detail", (err, result, fields) => {
    if (err) console.log(err);
    console.log(">>> get call...");
    res.json(result);
  });
});

// get by id
app.get("/user/:id", (req, res) => {
  const id = String(req.params.id);
  const temp = "SELECT * FROM user_detail WHERE id =" + req.params.id;
  connection.query(
    "SELECT * FROM user_detail WHERE id = ?",
    [id],
    (err, result, fields) => {
      if (err) console.log(err);
      console.log(">>> get by id call...");
      res.json(result);
    }
  );
});

// post method
app.post("/user", (req, res) => {
  connection.query(
    "INSERT INTO user_detail SET ?",
    [req.body],
    (err, result, fields) => {
      if (err) console.log(err);
      console.log(">>> post method call...");
      res.json({ result: "Record created..." });
    }
  );
});

// update
app.put("/user/:id", (req, res) => {
  const temp = "UPDATE user_detail SET ? WHERE id = " + String(req.params.id);
  connection.query(temp, [req.body], (err, result, fields) => {
    if (err) console.log(err);
    console.log(">>> put method call...");
    res.json({ result: "Record updated..." });
  });
});

// delete method
app.delete("/user/:id", (req, res) => {
  const temp = "DELETE FROM user_detail WHERE id =" + String(req.params.id);
  connection.query(temp, (err, result, fields) => {
    if (err) console.log(err);
    console.log(">>> put method call...");
    res.json({ result: "Record deleted...." });
  });
});

app.listen(8080);
