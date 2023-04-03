"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getName() {
        return this.name;
    }
    setName(newName) {
        this.name = newName;
    }
    getAge() {
        return this.age;
    }
    setAge(newAge) {
        this.age = newAge;
    }
}
let john = new Employee("John", 30);
console.log(john.getName()); //output "John"
console.log(john.getAge()); //output 30
console.log(john.getName()); //output "John"
john.setName('Jane');
console.log(john.getName()); //output "Jane"
// function setName(newName: any, string: any) {
//     throw new Error("Function not implemented.");
// }
//# sourceMappingURL=notes.js.map