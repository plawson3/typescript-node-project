class BankAccount {
    AccountBalance;
    constructor() {
        this.AccountBalance = 100;
    }
    Debit(amt) {
        let statement = "Sorry, you have insufficient Balance.";
        if (amt > 0) {
            statement = "The amount you entered is wrong";
            if (this.AccountBalance > amt) {
                this.AccountBalance = this.AccountBalance - amt;
                statement = `Transaction successful! New account balance is ${this.AccountBalance}`;
            }
            else {
                statement = "You don't have enough money to do this transaciton";
            }
        }
        return statement;
    }
    Credit(amt) {
        let statement = "Transaction Failed!";
        if (amt > 0) {
            this.AccountBalance = this.AccountBalance + amt;
            if (amt > 100) {
                this.AccountBalance = this.AccountBalance - 1;
            }
            statement = "Your account has been credited successfully!";
        }
        return statement;
    }
}
export default BankAccount;
