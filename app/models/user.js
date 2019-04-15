module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    cpf: DataTypes.STRING,
    password: DataTypes.STRING,
  });

  // User.associate = (models) => {
  //   User.belongsToMany(models.user, {
  //     through: 'Users_Events',
  //     as: 'events',
  //     foreignKey: 'EventId',
  //   });
  // };

  return User;
};
