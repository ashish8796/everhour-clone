const { Time } = require("../../models/time");

const getAllTasksTime = async (req, res) => {
  const data = await Time.find().exec();
};

module.exports = { getAllTasksTime };
