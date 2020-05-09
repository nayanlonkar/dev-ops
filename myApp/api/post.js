const express = require("express");
const router = express.Router();
const connection = require("../db_connection");

// post method
router.post("/", (req, res) => {
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

module.exports = router;
