const path = require('path');
const express = require('express');
const router = express.Router();

const loanController = require(../controllers/loans);



router.get("/get-available-loans", getAllAvailableLoans);
router.post("/apply-for-loan", applyForLoan)