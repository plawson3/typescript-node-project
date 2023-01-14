class Person {
    personality;
    constructor() {
        this.personality = "Mystery";
    }
    AskQuestion(answer) {
        if (answer === 1) {
            this.personality = "Extravert";
        }
        else if (answer === 2) {
            this.personality = "Introvert";
        }
        else {
            this.personality = "you are still a Mystery!";
        }
    }
    GetPersonality() {
        return this.personality;
    }
}
class Student extends Person {
    _name;
    constructor() {
        super();
        this._name = "";
    }
    // This is the Name Property
    get Name() {
        return this._name;
    }
    set Name(v) {
        this._name = v;
    }
}
export default Student;
export { Person };
