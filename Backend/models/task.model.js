const mongoose = require("mongoose");

// Define the schema for the objects inside the array
// const quizInfoSchema = mongoose.Schema({
//   language: { type: String, ref: "quizz" },
//   score: { type: Number },
// });

const taskSchema = mongoose.Schema(
  {
    title: { type: String },
    description: { type: String, required: true },
    duedate: { type: String, required: true },
    createdat: { type: String, required: true },
    completed: { type: Boolean, required: true, default: false },
  },
  {
    versionKey: false,
  }
);

const TaskModel = mongoose.model("task", taskSchema);

module.exports = {
    TaskModel
};