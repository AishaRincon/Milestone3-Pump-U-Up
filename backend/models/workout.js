'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Workout extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Workout.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    muscle_group: {
      type: DataTypes.STRING,
      allowNull:true
    },
    weight_used: {
      type: DataTypes.INTEGER,
      allowNull:true
    },
    reps_completed: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cardio: {
        type: DataTypes.STRING,
        allowNull: true
      },
    note: {
        type: DataTypes.STRING,
        allowNull: true
      },
    date: {
        type: DataTypes.DATEONLY,
        allowNull: false
      },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'users',
            key: 'id'
        }
    }
  }, {
    sequelize,
    modelName: 'Workout',
    tableName: 'workouts',
    timestamps: false
  });

  return Workout;
};