const express = require('express');

const morgan = require('morgan');
const bodyParser = require('body-parser');

const cors = require('cors');

const connectDB = require('./database/connect');

const sequelize = require('./database/createDB');


const app = express();




//configs-------------------

app.use(express.json())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('dev'));

app.use(cors({
    origin: 'http://localhost:3000',
}));


//Database connection=========================================================


sequelize.sync({foce: true})
// console.log('after scyn')
.then((result) => {
    console.log('inside then')

    console.log(result);
})
.catch((err) => {
    console.log('inside catch')
    console.error(err);
});



// connectDB.connectDB;

// con.connect((err) => {
//     if(err) {
//         console.log(err);
//     }
//     console.log("connected to sql");
// })


//router import---------------------------------------
const AuthRoute = require('./routes/authRouter');
const ChatRoute = require('./routes/chatRouter');


//main links -------------------------------

app.use('/api/authen',AuthRoute);
app.use('/api/chats', ChatRoute);


app.get('/api', (req,res) => {
    res.status(200).json({
        message: 'connected'
    })
} )



app.listen(3001, () => {
    console.log('server listening on 3001')
})

