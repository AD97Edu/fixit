const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');

class Tag extends Model {}
Tag.init({
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false, unique: true }
}, { sequelize, modelName: 'Tag', tableName: 'TAGS', timestamps: false });

module.exports = Tag;