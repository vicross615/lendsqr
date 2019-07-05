var loans = [{
    name: 'ren money',
    description: 'Salary earners discounted loan',
    rate: 3,
    amount: 50000,
    tenure: 18
    },
    {
        name: 'kia kia',
        description: 'Easy small loan ',
        rate: 5,
        amount: 5000,
        tenure: 3
    }];

module.export = class Loan {
    name: String;
    description: String;
    interestRate: Number;
    tenure: Number;
    amount: Number;

    constructor(name, description, amount) {
        this.name = name;
        this.description = description;
        this.amount = amount;
    }

    static getLoans() {
        return this.loans;
    }
}