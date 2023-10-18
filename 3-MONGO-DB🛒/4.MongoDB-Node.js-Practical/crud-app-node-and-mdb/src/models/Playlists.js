const { Schema, model } = require("mongoose");

let playlistSchema = Schema({
  author: {
    type: String,
    uppercase: true,
  },
  title: {
    type: String,
    uppercase: true,
  },
  courseType: {
    type: String,
    lowercase: true,
  },
  videos: {
    type: Number,
    validate(value) {
      if (value < 0) throw new Error("Videos Count Should not be negative");
    },
  },
  level: {
    type: String,
    lowercase: true,
    enum: ["beginner", "intermediate", "advanced"],
  },
  link: {
    type: String,
    unique: true,
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
  },
  dateCreateAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = model("Playlist", playlistSchema);
