const Tutorial = require("../models/energy.model.js");

// Retrieve all Tutorials from the database (with condition).
// Retrieve all Tutorials from the database (with condition).
exports.findAll = (req, res) => {
  const date = req.query.date;

  Tutorial.getAll(date, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials.",
      });
    else res.send(data);
  });
};

exports.getTotal = (req, res) => {
  const date = req.query.date;
  Tutorial.getTotal(date, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials.",
      });
    else res.send(data);
  });
};
