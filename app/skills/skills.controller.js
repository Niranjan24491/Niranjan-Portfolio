const Skill = require("./skills.model.js");

exports.create = function(req, res) {
  // Create and Save a new Skill
  if (!req.body.skills) {
    res.status(400).send({ message: "Skill can not be empty" });
  } else {
    const skills = new Skill({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      title: req.body.title,
      skills: req.body.skills
    });

    skills.save(function(err, data) {
      console.log("Data in Save" + data);
      if (err) {
        console.log("Error in save" + err);
        res
          .status(500)
          .send({ message: "Some error occurred while creating the Skill." });
      } else {
        res.status(200).send({ message: "Data saved successfully" });
      }
    });
  }
};

exports.findAll = function(req, res) {
  // Retrieve and return all notes from the database.
  Skill.find(function(err, notes) {
    if (err) {
      res
        .status(500)
        .send({ message: "Some error occurred while retrieving notes." });
    } else {
      res.send(notes);
    }
  });
};

exports.findOne = function(req, res) {
  // Find a single skills with a noteId
};
