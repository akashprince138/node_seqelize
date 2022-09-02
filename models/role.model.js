module.exports = (sequelize, Sequelize) => {
  const Role = sequelize.define("roles", {
    userId: {
      type: Sequelize.STRING,
    },
    role: {
      type: Sequelize.STRING,
    },
  });
  return Role;
};
