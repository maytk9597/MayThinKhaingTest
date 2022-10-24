const sql = require("./db.js");

// constructor
const Tutorial = function (tutorial) {
  this.date = tutorial.date;
  this.time = tutorial.time;
  this.data = tutorial.data;
};

Tutorial.getAll = (date, result) => {
  let query = "SELECT * FROM energy_consumption";
  console.log(date);
  if (date) {
    query += ` WHERE date = '${date}'`;
  }

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    result(null, res);
  });
};
Tutorial.getTotal = (date, result) => {
  let query = `SELECT
   SUM(CASE WHEN date = '${date}' THEN data ELSE 0 END)AS total FROM energy_consumption`;

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    if (!date) {
      result(null, { error: "date is required" });
      return;
    } else {
      result(null, res);
    }
  });
};

module.exports = Tutorial;
