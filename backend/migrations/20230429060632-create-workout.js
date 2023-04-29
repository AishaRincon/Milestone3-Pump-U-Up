'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('workouts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      muscle_group: {
        type: Sequelize.STRING,
        allowNull:true
      },
      weight_used: {
        type: Sequelize.INTEGER,
        allowNull:true
      },
      reps_completed: {
        type: Sequelize.INTEGER,
        allowNull:true
      },
      cardio: {
        type: Sequelize.STRING,
        allowNull:true
      },
      note: {
        type: Sequelize.STRING,
        allowNull:true
      },
      date: {
        type: Sequelize.DATEONLY,
        allowNull:false
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references: {
          model: 'users',
          key: 'id'
        }
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('workouts');
  }
};