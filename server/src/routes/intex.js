const express = require("express");
const router = express();
const getAllTasksTime = require("");

router.get("/times", getAllTasksTime);

module.exports = router;
