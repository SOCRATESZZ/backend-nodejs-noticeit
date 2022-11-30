// const mysql = require('mysql');


// const db = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "Shailaja@1977"
// })

const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    "project1",
    // "sql12551911"
    // "sql12.freemysqlhosting.net",
    "root",
    "Shailaja@1977",
    {
        dialect: "mysql",
        host: "localhost",
    }
);

sequelize.authenticate().then(() => {
    console.log('connected to db');
}).catch((err) => {
    console.error(err, '------------cannot connect to db------------');
});


module.exports = sequelize;