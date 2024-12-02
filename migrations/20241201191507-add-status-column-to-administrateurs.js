'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('administrateurs', 'status', {
      type: Sequelize.ENUM('active', 'inactive'),
      allowNull: false,
      defaultValue: 'active',
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('administrateurs', 'status');
    // Supprimez l'ENUM de la base de données si nécessaire
    await queryInterface.sequelize.query('DROP TYPE "enum_administrateurs_status";');
  },
};
