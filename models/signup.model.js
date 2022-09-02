module.exports = (sequelize, Sequelize) => {
  const Signup = sequelize.define("users", {
    name: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
    password: {
      type: Sequelize.STRING,
    },
    mobile: {
      type: Sequelize.STRING,
    },
  });
  return Signup;
};
