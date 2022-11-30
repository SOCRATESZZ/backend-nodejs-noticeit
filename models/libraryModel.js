const Sequelize = require('sequelize');

const sequelize = require('../database/createDB');

const Library = sequelize.define(
    'booksisuued', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        
    }
)