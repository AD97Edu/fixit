const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');

class Department extends Model {}
Department.init({
  id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT },
  created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
}, { sequelize, modelName: 'Department', tableName: 'DEPARTMENTS', timestamps: false });

module.exports = Department;