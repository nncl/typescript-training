function Student(config) {
    return function (target) {
        Object.defineProperty(target.prototype, 'course', {value: () => config.course});
    }
}

@Student({
    course: "Angular4+"
})
class Person {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

let person = new Person("Caue", "Alemida");
console.log(person.course());