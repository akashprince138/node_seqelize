module.exports = (app) => {
  const users = require("../controllers/user.controller.js");
  var router = require("express").Router();
  const tokenVerify = require("./../token_verify");
  router.get("/api/users/", tokenVerify, users.findAll);
  router.get("/api/users/:id", tokenVerify, users.findOne);
  router.put("/api/users/:id", tokenVerify, users.update);
  router.delete("/api/users/:id", tokenVerify, users.delete);
  app.use("/", router);
};
