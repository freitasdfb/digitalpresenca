module.exports = {
  up: (queryInterface, DataTypes) => queryInterface.createTable('Evento', {
    id: {
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    nome: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    descricao: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    tipo: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    data_inicio:{
      allowNull: false,
      type: DataTypes.DATE,
    },
    data_fim: {
      allowNull: false,
      type: DataTypes.DATE,
    },

    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  }),

  down: queryInterface => queryInterface.dropTable('Evento'),
};
