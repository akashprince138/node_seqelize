module.exports = (app) => {
  const signup = require("../controllers/signup.controller");
  var router = require("express").Router();
  router.post("/api/signup/", signup.create);
  app.use("/", router);
};
