import { question } from 'readline-sync';

class ATM {

    private _username: string;
    private _userid: string;
    private _pin: number;
    private _balance: number;

    constructor(username: string, userid: string, pin: number, balance: number) {
        this._balance = balance;
        this._pin = pin;
        this._userid = userid;
        this._username = username;
    }

    public getBalance(): number {
        return this._balance;
    }
    public setBalance(v: number) {
        this._balance = v;
    }

    public getPin(): number {
        return this._pin;
    }
    public setPin(v: number) {
        this._pin = v;
    }

    public getUserName(): string {
        return this._username;
    }
    public setUserName(v: string) {
        this._username = v;
    }

    public getUserId(): string {
        return this._userid;
    }
    public setUserId(v: string) {
        this._userid = v;
    }

    Deposit(atm: ATM, v: number) {
        if (v > 0) {
            this._balance = this._balance + v;
            console.log(`\nYou have made a deposit of ${v}`);
            this.CheckBalance();
        }
    }

    Withdraw(atm: ATM, v: number) {

        if (this.getBalance() >= v && v > 0) {
            this._balance = this._balance - v;
            console.log(`\nYou have Withdraw ${v} from your account.`);
            this.CheckBalance();
        }
        else {
            console.log("\nSorry, you don't have that amount :(");
        }
    }

    CheckBalance() {
        console.log(`\nHi ${this._username}, your Current Balance is ${this._balance}`);
    }

    Info() {
        console.log(`\nUser Name : ${this._username}\nUserId : ${this._userid}\nPIN : ${this._pin}\nBalance : ${this._balance}`);
    }

    options(): void {
        console.log(`\n\nWelcome ${this._username}, Please Choose below options.`);
        console.log(`1 : User Information...`);
        console.log(`2 : Check Balance...`);
        console.log(`3 : Deposit...`);
        console.log(`4 : Withdraw...`);
        console.log(`5 : Exit...\n***********END***********\n\n`);
    }
}


function main() {

    var customers = [
        { UserName: "Haris Rehman", UserId: "haris155", Pin: 7860, Balance: 20000 },
        { UserName: "Ammad Raza", UserId: "ammad111", Pin: 1234, Balance: 50000 },
        { UserName: "Ali Raza", UserId: "ali111", Pin: 1111, Balance: 54000 },
        { UserName: "Ahmad Khan", UserId: "ahmad321", Pin: 3211, Balance: 67000 },
    ]



    let successFlag: Boolean = false;
    let UserObj;
    console.log("\n|===================================|");
    console.log("|\t\t\t\t    |\n|**** Welcome to Typescript ATM ****|\n|\t\t\t\t    |");
    console.log("|===================================|\n");

    while (true) {

        const userid = question("Enter UserId: ");
        UserObj = customers.find(x => x.UserId === userid);
        const uesridExist = customers.find(x => x.UserId === userid) != undefined ? true : false;

        if (uesridExist) {

            let countPin: number = 1;
            while (countPin < 3) {

                const pin = Number(question("Enter PIN: "));
                const IsCorrectPin = customers.find(x => x.Pin === pin) != undefined ? true : false;
                if (countPin === 3) {
                    break;
                }
                if (IsCorrectPin) {
                    successFlag = true;
                    break;
                }
                else {
                    console.log(`You have ${3 - countPin} tries left`);
                    countPin += 1;
                }
            }
        }
        if (successFlag === true) {
            break;
        }
    }

    if (UserObj === null || UserObj === undefined) {
        return UserObj;
    }

    const obj = new ATM(UserObj.UserName, UserObj.UserId, UserObj.Pin, UserObj.Balance);

    let endFlag: Boolean = true;
    while (endFlag) {
        obj.options();
        const userOpt = question("Kindly select an option...");
        switch (userOpt) {
            case '1':
                obj.Info();
                break;
            case '2':
                obj.CheckBalance();
                break;
            case '3':
                const depositAmoutn = Number(question("How much money you want to deposit... : "));
                obj.Deposit(obj, depositAmoutn);
                break;
            case '4':
                const withdrawAmoutn = Number(question("How much money you want to Withdraw... : "));
                obj.Withdraw(obj, withdrawAmoutn);
                break;
            case '5':
                endFlag = false;
                break;
        }
    }
}

main();