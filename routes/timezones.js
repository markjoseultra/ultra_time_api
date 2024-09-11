const express = require("express");
const {
  getDateTime,
  timezones,
} = require("../controllers/timezone_controllers");
const router = express.Router();

router.get("/time", getDateTime);

router.get("/timezones", timezones);

module.exports = router;
