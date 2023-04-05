class Employee {
    private name: string;
    private age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    getName(): string {
        return this.name;
    }
    setName(newName: string) {
        this.name = newName;
    }

    getAge(): number {
        return this.age;
    }
    setAge(newAge: number) {
        this.age = newAge;
    }
}

class Manager extends Employee {
    private department: string;

    constructor(name: string, age: number, department: string) {
        super(name, age)
        this.department = department
    }

    getDepartment(): string {
        return this.department
    }

    getName(): string {
        return 'Manager: ' + super.getName()
    }
}

class Developer extends Employee {
    private programmingLanguage: string;

    constructor(name: string, age: number, programmingLanguage: string) {
        super(name, age)
        this.programmingLanguage = programmingLanguage
    }

    getProgrammingLanguage(): string {
        return this.programmingLanguage
    }

    getName(): string {
        return 'Developer: ' + super.getName()
    }
}

function printNames(es: Employee[]) {
    es.forEach((e) => console.log(e.getName()))
}

const employees: Employee[] = [
    new Manager('Sophie', 25, 'HR'),
    new Developer('Lars', 28, 'TypeScript')
]

console.log(printNames(employees))

export { }