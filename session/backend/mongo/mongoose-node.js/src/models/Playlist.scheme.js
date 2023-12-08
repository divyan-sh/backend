const { Schema, model } = require("mongoose");

let playlistSchema = new Schema({
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
    min: [0, "Value cannot be negative, got {VALUE}"],
    // validate(value) {
    //   if (value < 0) throw new Error("Videos Count Should not be negative");
    // },
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

const playlistModel = new model("Playlist", playlistSchema);

module.exports = playlistModel;
