const mongoose = require("mongoose");

const ContactSchema = mongoose.Schema(
  {
    name: String,
    message: String
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Contact", ContactSchema);
