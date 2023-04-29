'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Workouts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id: {
        type: Sequelize.INTEGER
      },
      muscle_group: {
        type: Sequelize.STRING
      },
      weight_used: {
        type: Sequelize.INTEGER
      },
      reps_completed: {
        type: Sequelize.INTEGER
      },
      cardio: {
        type: Sequelize.STRING
      },
      note: {
        type: Sequelize.STRING
      },
      date: {
        type: Sequelize.DATEONLY
      },
      user_id: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Workouts');
  }
};