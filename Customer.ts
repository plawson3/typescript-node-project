import BankAccount from "./BankAccount.js";

class Customer {

    public FirstName: string;
    public LastName: string;
    public Gender: string;
    public Age: number;
    public MobileNumber: string;
    public bankAccount: BankAccount;

    constructor(firstName: string, lastName: string, gender: string, age: number, mobileNumber: string, bankAccount: BankAccount) {
        this.FirstName = firstName;
        this.LastName = lastName;
        this.Gender = gender;
        this.Age = age;
        this.MobileNumber = mobileNumber;
        this.bankAccount = bankAccount;
    }

    CustomerInfo(): void {
        console.log(`Name: ${this.FirstName} ${this.LastName}`);
        console.log(`Age: ${this.Age}`);
        console.log(`Gender: ${this.Gender}`);
        console.log(`Mobile: ${this.MobileNumber}`);
        console.log(`Account Balance: ${this.bankAccount.AccountBalance}`);
    }

}

export default Customer;