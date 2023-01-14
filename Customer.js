class Customer {
    FirstName;
    LastName;
    Gender;
    Age;
    MobileNumber;
    bankAccount;
    constructor(firstName, lastName, gender, age, mobileNumber, bankAccount) {
        this.FirstName = firstName;
        this.LastName = lastName;
        this.Gender = gender;
        this.Age = age;
        this.MobileNumber = mobileNumber;
        this.bankAccount = bankAccount;
    }
    CustomerInfo() {
        console.log(`Name: ${this.FirstName} ${this.LastName}`);
        console.log(`Age: ${this.Age}`);
        console.log(`Gender: ${this.Gender}`);
        console.log(`Mobile: ${this.MobileNumber}`);
        console.log(`Account Balance: ${this.bankAccount.AccountBalance}`);
    }
}
export default Customer;
