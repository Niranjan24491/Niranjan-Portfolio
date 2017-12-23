module.exports = function(app) {
  var contact = require("./contact.controller.js");

  // Create a new Note
  app.post("/contact", contact.create);
};
