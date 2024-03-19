const mongoose = require("mongoose");

// Define the schema for the objects inside the array
// const quizInfoSchema = mongoose.Schema({
//   taskId: { type: String, ref: "task" },
// });

const userSchema = new mongoose.Schema(
  {
    fullName: { type: String },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    taskIdArr: [ { type: String, ref: "task" } ],
  },
  {
    versionKey: false,
  }
);

const UserModel = new mongoose.model("user", userSchema);

module.exports = {
  UserModel,
};