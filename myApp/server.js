const express = require("express");
const cors = require("cors");
const connection = require("./db_connection"); // database connection

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1>Hi There</h1?");
});

// get all
app.get("/user", (req, res) => {
  if (
    Object.keys(req.query)[0] != "id" &&
    Object.keys(req.query)[0] != "name"
  ) {
    res.status(400);
    res.send("bad request");
  }
  // if (Object.keys(req.query)[0] !== 'id' || Object.keys(req.query)[0] !== 'name'){
  //   res.status(400);
  //   res.json({error: "bad request"})
  // }
  const id = req.query.id;
  const name = req.query.name;

  if (id === undefined && name === undefined) {
    res.status(400);
    res.json({ error: "pass the parameter either id or name" });
    res.send();
  }

  if (name === undefined) {
    connection.query(
      "SELECT * FROM user_detail WHERE id =" + id,
      (err, result, fields) => {
        if (err) {
          res.status(400);
          res.send({ error: "bad request" });
        } else {
          console.log(">>> get call...");
          if (result[0] === undefined) {
            res.json({ response: `user of id : ${id} is not present` });
          } else {
            res.json(result[0]);
          }
        }
      }
    );
  }

  if (id === undefined) {
    connection.query(
      "SELECT * FROM user_detail WHERE name =" + name,
      (err, result, fields) => {
        if (err) {
          res.status(400);
          res.send({ error: "bad request" });
        } else {
          console.log(">>> get call...");
          if (result[0] === undefined) {
            res.json({ response: `user of name : ${name} is not present` });
          } else {
            res.json(result[0]);
          }
        }
      }
    );
  }
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

app.listen(8080, () => console.log(">>> App is running on port 8080..."));
