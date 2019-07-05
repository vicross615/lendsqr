//var Loan = require('../model/loan');

const loansAvailable = [];
const isLoanRunning = false;


//get all avaliable loans
exports.getAllAvailableLoans = (res, req, next) => {
    res.render('all-loans', {
        //loans: Loans.getLoans(),
        pageTitle: 'Our loan list',
        formsCss: true,
        path: '/get-loans'
    });
}


//apply for loan
exports.applyForLoan=(res, req, next) => {
   var loans = new Loans();
    //get the loan id of the newly added loan
    // fetcch the loan details
    // redirect to the loan info page
    // res.redirect('/loan/{loanId}');
};