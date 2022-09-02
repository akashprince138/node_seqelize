module.exports = (app) => {
  const login = require("../controllers/login.controller");
  var router = require("express").Router();
  router.post("/api/login/", login.create);
  app.use("/", router);
};
