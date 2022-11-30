const Sequelize = require('sequelize');

const sequelize = require('../database/createDB');

const Chat = sequelize.define(
    'chat', 
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },

        org: {
            type: Sequelize.STRING,
            allowNull: false 
        },
        
        chat: {
            type: Sequelize.STRING,
        }
    },
    {
        timestamps: true, // Enable timestamps
        createdAt: true, // Don't create createdAt
        updatedAt: true, // Don't create updatedAt
        updatedAt: "updateTimestamp", // updatedAt should be called updateTimestamp
    }
);

module.exports = Chat;