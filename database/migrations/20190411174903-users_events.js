module.exports = {
  up: (queryInterface, DataTypes) => queryInterface.createTable('User_Event', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },

    EventId: {
      type: DataTypes.INTEGER,
      references: { model: 'Events', key: 'id' },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
      allowNull: false,
    },

    UserId: {
      type: DataTypes.INTEGER,
      references: { model: 'Users', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      allowNull: false,
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

  down: queryInterface => queryInterface.dropTable('User_Event'),
};
