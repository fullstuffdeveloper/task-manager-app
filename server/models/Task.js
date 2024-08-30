// Inside /models/Task.js
const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  status: { type: String, default: "pending" },
  created_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Task", TaskSchema);
