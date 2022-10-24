module.exports = (app) => {
  const tutorials = require("../controllers/energy.controller.js");

  var router = require("express").Router();

  router.get("/", tutorials.findAll);
  router.get("/total", tutorials.getTotal);

  app.use("/api/tutorials", router);
};
