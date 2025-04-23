const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');
const Department = require('./department');

class User extends Model {}
User.init({
  id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
  department_id: { type: DataTypes.BIGINT, references: { model: Department, key: 'id' } },
  name: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false, unique: true },
  password_hash: { type: DataTypes.STRING, allowNull: false },
  role: { type: DataTypes.ENUM('user', 'admin', 'technician'), allowNull: false },
  created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  updated_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
}, { sequelize, modelName: 'User', tableName: 'USERS', timestamps: false });

User.belongsTo(Department, { foreignKey: 'department_id' });
module.exports = User;