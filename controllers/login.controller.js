const db = require("../models");
const Joi = require("joi");
const Login = db.login;
const Op = db.Sequelize.Op;
const validateLogin = require("../validations/login.validation");
const { dashLogger } = require("../logger");
const swaggerAutogen = require("swagger-autogen")();
bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");
const accessTokenSecret = "youraccesstokensecret";

exports.create = async (req, res) => {
  /*  #swagger.parameters['obj'] = {
          in: 'login user',
          #swagger.tags = ["login user"]
          description: 'login user...',
          schema: {
              $email: '',
              $password: ""
          },
          #swagger.responses[200] = {
        description: " login data",
      }
  } */
  try {
    response = await validateLogin(req.body);
    if (response.error) {
      return res.status(400).send({
        status: "error",
        message: response.error.details[0].message,
      });
    }

    let data = await Login.findOne({ where: { email: req.body.email } });
    if (data) {
      const cmp = await bcrypt.compare(req.body.password, data.password);
      if (cmp) {
        const accessToken = jwt.sign({ data }, accessTokenSecret);
        res.status(200).send({
          status: "success",
          message: "User loggedin successfully.",
          data: data,
          token: accessToken,
        });
      } else {
        res.status(200).send({
          status: "error",
          message: "Wrong Email or password.",
        });
      }
    } else {
      res.status(200).send({
        status: "error",
        message: "Wrong Email or password.",
      });
    }
  } catch (error) {
    console.error(error);
    dashLogger.error(`Error : ${error},Request : ${req.originalUrl}`);
    return res.status(500).send({
      status: 500,
      message: error.message || "Some error occurred while creating the users.",
    });
  }
};
