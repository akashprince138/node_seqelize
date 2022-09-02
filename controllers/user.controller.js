const db = require("../models");
const Joi = require("joi");
const User = db.user;
const Role = db.role;
const Op = db.Sequelize.Op;
const validateUser = require("../validations/user.validation");
const { dashLogger } = require("../logger");
const swaggerAutogen = require("swagger-autogen")();
exports.findAll = (req, res) => {
  /*  #swagger.parameters['obj'] = {
          in: 'fetch users',
          #swagger.tags = ["fetch users"]
          description: 'fetch users...',
          #swagger.responses[200] = {
            description: " fetch data",
          }
  } */
  try {
    User.findAll({
      include: Role,
      attributes: ["name", "email"],
      order: [["name", "DESC"]],
      limit: 10,
    })
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Some error occurred while retrieving data.",
        });
      });
  } catch (error) {
    console.error(error);
    dashLogger.error(`Error : ${error},Request : ${req.originalUrl}`);
    res.render("400");
  }
};
exports.findOne = (req, res) => {
  /*  #swagger.parameters['obj'] = {
          in: 'fetch single user',
          #swagger.tags = ["fetch single users"]
          description: 'fetch users...',
          #swagger.responses[200] = {
            description: " fetch single data",
          }
  } */
  try {
    const id = req.params.id;
    User.findByPk(id)
      .then((data) => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find users with id=${id}.`,
          });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: "Error retrieving users with id=" + id,
        });
      });
  } catch (error) {
    console.error(error);
    dashLogger.error(`Error : ${error},Request : ${req.originalUrl}`);
    res.render("400");
  }
};

exports.update = (req, res) => {
  /*  #swagger.parameters['obj'] = {
          in: 'update single user',
          #swagger.tags = ["update single users"]
          description: 'update users...',
          schema: {
              $email: '',
              $password: ""
          },
          #swagger.responses[200] = {
            description: " update single data",
          }
  } */
  try {
    const id = req.params.id;
    response = validateUser(req.body);
    if (response.error) {
      return res.status(400).send({
        status: "error",
        message: response.error.details[0].message,
      });
    }
    User.update(req.body, {
      where: { id: id },
    })
      .then((num) => {
        if (num == 1) {
          res.send({
            message: "User was updated successfully.",
          });
        } else {
          res.send({
            message: `Cannot update User with id=${id}. Maybe User was not found or req.body is empty!`,
          });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: "Error updating User with id=" + id,
        });
      });
  } catch (error) {
    console.error(error);
    dashLogger.error(`Error : ${error},Request : ${req.originalUrl}`);
    res.render("400");
  }
};

exports.delete = (req, res) => {
  /*  #swagger.parameters['obj'] = {
          in: 'delete single user',
          #swagger.tags = ["delete single users"]
          description: 'delete users...',
          #swagger.responses[200] = {
            description: " delete single data",
          }
  } */
  try {
    const id = req.params.id;
    User.destroy({
      where: { id: id },
    })
      .then((num) => {
        if (num == 1) {
          res.send({
            message: "User was deleted successfully!",
          });
        } else {
          res.send({
            message: `Cannot delete User with id=${id}. Maybe User was not found!`,
          });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: "Could not delete User with id=" + id,
        });
      });
  } catch (error) {
    console.error(error);
    dashLogger.error(`Error : ${error},Request : ${req.originalUrl}`);
    res.render("400");
  }
};
