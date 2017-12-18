const mongoose = require("mongoose");

const SkillSchema = mongoose.Schema(
  {
    name: String,
    title: String,
    skills: []
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Skill", SkillSchema);
