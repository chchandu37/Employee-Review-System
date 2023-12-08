// models/Result.js
import mongoose from "mongoose";

const resultSchema = new mongoose.Schema({
  companyName: { type: String, required: true },
  result: { type: String, enum: ['PASS', 'FAIL', 'On Hold', 'Didn’t Attempt'], required: true },
  student: { type: mongoose.Schema.Types.ObjectId, ref: 'Student', required: true },
});

module.exports = mongoose.model('Result', resultSchema);
