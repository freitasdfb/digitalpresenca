module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    nome: DataTypes.STRING,
    descricao: DataTypes.STRING,
    tipo: DataTypes.STRING,
    data_inicio: DataTypes.DATE,
    data_fim: DataTypes.DATE,
  });

  Event.associate = (models) => {
    Event.belongsTo(models.User, {
      through: 'Users_Events',
      as: 'users',
      foreignKey: 'UserId',
    });
  };

  return Event;
};
