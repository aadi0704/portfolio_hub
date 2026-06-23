const mongoose = require('mongoose');

const dsaSchema = new mongoose.Schema({
  username: String,
  leetcodeProfile: String,

  stats: {
    totalSolved: Number,
    easy: Number,
    medium: Number,
    hard: Number
  },

  ranking: Number,

  streak: {
    maxStreak: Number,
    activeDays: Number
  },

  submissions: {
    thisYear: Number
  },

  target: Number,
  progress: Number,

  lastUpdated: Date
});

module.exports = mongoose.model("DSA", dsaSchema);