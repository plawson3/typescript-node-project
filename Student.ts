class Person {

    private personality: string;

    constructor() {
        this.personality = "Mystery";
    }

    AskQuestion(answer: number): void {
        if (answer === 1) {
            this.personality = "Extravert";
        } else if (answer === 2) {
            this.personality = "Introvert";
        } else {
            this.personality = "you are still a Mystery!";
        }
    }

    GetPersonality(): string {
        return this.personality;
    }
}

class Student extends Person {

    private _name: string;

    constructor() {
        super();
        this._name = "";
    }

    // This is the Name Property
    public get Name(): string {
        return this._name;
    }

    public set Name(v: string) {
        this._name = v;
    }
}
export default Student;
export {Person};

