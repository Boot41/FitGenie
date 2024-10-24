import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const User = sequelize.define('User', {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  gender: {
    type: DataTypes.ENUM('Male', 'Female', 'Other'),
    allowNull: true,
  },
  height: {
    type: DataTypes.FLOAT, 
    allowNull: true,
  },
  weight: {
    type: DataTypes.FLOAT, 
    allowNull: true,
  },
  activityLevel: {
    type: DataTypes.ENUM('Sedentary', 'Lightly Active', 'Moderately Active', 'Very Active'),
    allowNull: true,
  },
  dietType: {
    type: DataTypes.ENUM('Veg', 'Non-Veg', 'Vegan', 'Any'),
    allowNull: true,
  },
  foodRestrictions: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  fitnessGoal: {
    type: DataTypes.ENUM('Weight Loss', 'Muscle Gain', 'Maintenance', 'Endurance'),
    allowNull: true,
  },
  injuries: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  healthConditions: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  waterIntake: {
    type: DataTypes.ENUM('Less than 1L', '2-3L', 'Above 3L'),
    allowNull: true,
  },
  intensity: {
    type: DataTypes.ENUM('Low', 'Medium', 'High'),
    allowNull: true,
  },
  currentlyWorkout: {
    type: DataTypes.ENUM('Yes', 'No'),
    allowNull: true,
  },
  workoutType: {
    type: DataTypes.ENUM('Cardio', 'Strength', 'Flexibility', 'Mixed'),
    allowNull: true,
  },
  workoutDuration: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  workoutFrequency: {
    type: DataTypes.ENUM(
      '1 day a week',
      '2 days a week',
      '3 days a week',
      '4 days a week',
      '5 days a week',
      '6 days a week',
    ),
    allowNull: true,
  },
  workoutTimePreference: {
    type: DataTypes.ENUM('Morning', 'Afternoon', 'Evening'),
    allowNull: true,
  },
  hasCurrentDiet: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  hasCurrentWorkout: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
}, {
});

export default User;
