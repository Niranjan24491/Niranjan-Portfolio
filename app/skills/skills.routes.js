module.exports = function(app) {
  var skills = require("./skills.controller.js");

  // Create a new Note
  app.post("/skills", skills.create);

  // Retrieve all skills
  app.get("/skills", skills.findAll);

  // Retrieve a single Note with noteId
  app.get("/skills/:noteId", skills.findOne);
};
