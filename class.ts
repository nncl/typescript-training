interface Human {
    firstName: string;
    lastName: string;
    age?: number;
    name?: Function;
    isLate? (time: Date): Function;
}

class Person implements Human {

    // Automatically creates public variables
    constructor(public firstName: string, public lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    name() {
        return `${this.firstName} ${this.lastName}`;
    }

    protected whoAreYou() {
        return `Hi i'm ${this.name()}`;
    }
}

class Student extends Person {
    course = "";

    constructor(firstName: string, lastName: string, course: string) {
        super(firstName, lastName);
        this.course = course;
    }

    whoAreYou() {
        return `${super.whoAreYou()} and i'm studying ${this.course}`;
    }
}

let student = new Student("Caue", "Almeida", "Programming");
console.log(student.whoAreYou());
