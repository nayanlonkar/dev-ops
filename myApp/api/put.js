const express = require("express");
const router = express.Router();
const connection = require("../db_connection");

// update
router.put("/", (req, res) => {
  const temp = "UPDATE user_detail SET ? WHERE id = " + String(req.params.id);
  connection.query(temp, [req.body], (err, result, fields) => {
    if (err) console.log(err);
    console.log(">>> put method call...");
    res.json({ result: "Record updated..." });
  });
});

module.exports = router;
