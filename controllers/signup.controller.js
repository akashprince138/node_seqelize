const db = require("../models");
const Joi = require("joi");
const Signup = db.signup;
const Op = db.Sequelize.Op;
const validateSignup = require("../validations/signup.validation");
const { dashLogger } = require("../logger");
const swaggerAutogen = require("swagger-autogen")();
bcrypt = require("bcrypt");
const saltRounds = 10;

exports.create = async (req, res) => {
  /*  #swagger.parameters['obj'] = {
          in: 'signup user',
          #swagger.tags = ["signup user"]
          description: 'signup user...',
          schema: {
              $name: '',
              $email: '',
              $password: "",
              $mobile: "",
          },
          #swagger.responses[200] = {
        description: " signup user",
      }
  } */
  try {
    response = await validateSignup(req.body);
    if (response.error) {
      return res.status(400).send({
        status: "error",
        message: response.error.details[0].message,
      });
    }

    let data = await Signup.findOne({ where: { email: req.body.email } });
    if (data) {
      return res
        .status(200)
        .send({ status: 200, message: "email already exist." });
    }
    const hashedPwd = await bcrypt.hash(req.body.password, saltRounds);
    const value = {
      name: req.body.name,
      email: req.body.email,
      password: hashedPwd,
      mobile: req.body.mobile,
    };
    let signupData = await Signup.create(value);
    if (signupData) {
      return res.status(200).send({ status: 200, message: signupData });
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
