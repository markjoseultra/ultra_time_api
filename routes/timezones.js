const express = require("express");
const { timezone } = require("../controllers/timezone_controllers");
const router = express.Router();

router.get("/time/:timezone", timezone);

module.exports = router;
