const Sequelize = require('sequelize');

const sequelize = require('../database/createDB');

const Student = sequelize.define(
    'student', {
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

        reg_id: {
            type: Sequelize.STRING,
            allowNull: false
        },

        name: {
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

        rollno: {
            type: Sequelize.STRING,
            allowNull: false
        },

        
        clubs: {
            type: Sequelize.JSON,
        },
        
        email: {
            type: Sequelize.STRING,
            allowNull: false,
            isEmail: true
        }



    },
    {
        timestamps: true, // Enable timestamps
        createdAt: true, // Don't create createdAt
        updatedAt: true, // Don't create updatedAt
        updatedAt: "updateTimestamp", // updatedAt should be called updateTimestamp
    }
);


module.exports = Student;