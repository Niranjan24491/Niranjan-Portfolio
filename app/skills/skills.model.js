const mongoose = require("mongoose");

const SkillSchema = mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    title: String,
    skills: []
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Skill", SkillSchema);
