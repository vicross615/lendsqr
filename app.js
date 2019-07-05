const path = require('path');
const express = require('express');
const router = express.Router();

const authRoutes = require('./routes/auth/authRoute');
const loanRoutes = require('./routes/loan/loanRoute');


var cors = require('cors')
var app = express();

const port = 4000;


// set middlewares
app.set('view engine', 'ejs');

app.use(cors())

app.use(express.json());

app.use(function (req, res, next) {
    //Enabling CORS
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");
    next();
});


// set app routes
app.get('/', function(req, res) {
    res.render('home');
});

app.use("/create-users", authRoutes);
app.use("/login", authRoutes);


app.use("/get-user-bio", authRoutes);

app.use("/get-loans", loanRoutes);
app.use("/apply-for-loan", loanRoutes);






app.listen(process.env.PORT || port, function( ) {
    console.log(`running on port ${port}`);
});