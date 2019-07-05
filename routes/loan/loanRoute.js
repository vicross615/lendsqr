const express = require('express');
const path = require('path');

const router = express.Router();

const loanController = require('../../controllers/loan/loans');


router.get('get-loans', loanController.getAllAvailableLoans);
router.post('apply-for-loan', loanController.applyForLoan);

module.exports = router;