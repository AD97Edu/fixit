const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');

class Category extends Model {}
Category.init({
  id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT },
  created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
}, { sequelize, modelName: 'Category', tableName: 'CATEGORIES', timestamps: false });

module.exports = Category;