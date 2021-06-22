const express = require("express");
const router = express.Router();

const getAllTasksTime = require("");

router.get("/times", getAllTasksTime);

module.exports = router;
