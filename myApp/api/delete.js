const express = require("express");
const router = express.Router();
const connection = require("../db_connection");

// delete method
router.delete("/", (req, res) => {
  const temp = "DELETE FROM user_detail WHERE id =" + String(req.params.id);
  connection.query(temp, (err, result, fields) => {
    if (err) console.log(err);
    console.log(">>> put method call...");
    res.json({ result: "Record deleted...." });
  });
});

module.exports = router;
