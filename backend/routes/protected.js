const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "You have accessed a protected route", user: req.user });
});

module.exports = router;
