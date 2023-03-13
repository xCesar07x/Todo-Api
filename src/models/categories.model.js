const { DataTypes } = require('sequelize');
const db = require('../utils/databse');

const Category = db.define('categories', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING(30),
        allowNull: false,
        unique: true,
        field: 'category_id'
    }
}, {
    timestamps: false,
    updatedAt: false,
})

module.exports = Category;