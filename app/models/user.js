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

  User.associate = (models) => {
    User.belongsToMany(models.Event, {
      through: 'User_Event',
      as: 'evento',
      foreignKey: 'EventId',
    });
  };

  return User;
};
