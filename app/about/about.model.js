const mongoose = require("mongoose");

const AboutSchema = mongoose.Schema(
  {
    aboutMe: String
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("About", AboutSchema);
