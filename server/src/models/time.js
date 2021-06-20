const mongoose = require("mongoose");

const { Schema } = mongoose;

const timeSchema = new Schema({
  task_id: {
    type: String,
    required: true,
  },
  section_id: {
    type: String,
    required: true,
  },
  project_id: {
    type: String,
    required: true,
  },
  messages: [
    {
      title: {
        type: String,
      },

      // date: {
      //   type: Date,
      //   default: Date.now,
      // },

      timestamp: true,
    },
  ],

  time: {
    total: Number,
    timeSpan: [
      {
        start: { type: Date, required: true },
        end: { type: Date, required: true },
      },
    ],
  },
});

const Time = mongoose.model("Time", timeSchema);

module.exports = Time;
