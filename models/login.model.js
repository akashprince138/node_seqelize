module.exports = (sequelize, Sequelize) => {
  const Login = sequelize.define("users", {
    email: {
      type: Sequelize.STRING,
    },
    password: {
      type: Sequelize.STRING,
    },
  });
  return Login;
};
