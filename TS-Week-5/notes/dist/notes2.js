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
class Manager extends Employee {
    constructor(name, age, department) {
        super(name, age);
        this.department = department;
    }
    getDepartment() {
        return this.department;
    }
    getName() {
        return 'Manager: ' + super.getName();
    }
}
class Developer extends Employee {
    constructor(name, age, programmingLanguage) {
        super(name, age);
        this.programmingLanguage = programmingLanguage;
    }
    getProgrammingLanguage() {
        return this.programmingLanguage;
    }
    getName() {
        return 'Developer: ' + super.getName();
    }
}
function printNames(es) {
    es.forEach((e) => console.log(e.getName()));
}
const employees = [
    new Manager('Sophie', 25, 'HR'),
    new Developer('Lars', 28, 'TypeScript')
];
console.log(printNames(employees));
//# sourceMappingURL=notes2.js.map