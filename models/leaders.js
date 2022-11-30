const Sequelize = require('sequelize');

const sequelize = require('../database/createDB');

const Leader = sequelize.define(
    'leader', 
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },

        branch: {
            type: Sequelize.STRING,
            allowNull: false
        },
        
        phone: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true
        },

        hashedPassword: {
            type: Sequelize.STRING(64),
        },

        email: {
            type: Sequelize.STRING,
            allowNull: false,
            isEmail: true
        },

        chats: {
            type: Sequelize.JSON,
        }

    },
    {
        timestamps: true, // Enable timestamps
        createdAt: true, // Don't create createdAt
        updatedAt: true, // Don't create updatedAt
        updatedAt: "updateTimestamp", // updatedAt should be called updateTimestamp
    }
);


module.exports = Leader;