const path = require('path');
const express = require('express');
const router = express.Router();

const userController = require('./controllers/user/user');
const loanController = require('./controllers/loan/loans');


var cors = require('cors')
var app = express();

const port = 4000;


// set the view engine to ejs
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

// app.use(express.static(path.join(__dirname, 'dist/calmdusk')));



// router.get("/get-available-loans", loanController.getAllAvailableLoans);
// router.post("/apply-for-loan", loanController.applyForLoan);
//
//
//
// router.post("/create-users", userController.createNewUser());
// router.post("/login", userController.login())
// router.get("/get-user", userController.getUserData());

app.use((req, res, next)=> {
    res.status(400).render('404', {
        pageTitle: 'lost but found page'
});
});


app.listen(process.env.PORT || port, function( ) {
    console.log(`running on port ${port}`);
});