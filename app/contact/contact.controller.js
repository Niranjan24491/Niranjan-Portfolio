const Contact = require("./contact.model.js");

exports.create = function(req, res) {
  // Create and Save a new message text
  if (!req.body.message) {
    res.status(400).send({ message: "message can not be empty" });
  } else {
    const about = new Contact({
      name: req.body.name,
      message: req.body.message
    });

    about.save(function(err, data) {
      console.log("Data in Save" + data);
      if (err) {
        console.log("Error in save" + err);
        res.status(500).send({
          message: "Some error occurred while creating the ABout me text."
        });
      } else {
        res.status(200).send({ message: "Data saved successfully" });
      }
    });
  }
};
