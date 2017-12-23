module.exports = function(app) {
  var about = require("./about.controller.js");

  // Create a new Note
  app.post("/about", about.create);

  // Retrieve all about
  app.get("/about", about.findAll);
};
