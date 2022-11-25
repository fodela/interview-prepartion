// classes in Typescript

class Person {

    constructor(private name:string, private age:number, public sex:string) {
        this.name = name
        this.age = age
        this.sex = sex
    }

    // method
    sayName(){
        return "Hi! my name is " + this.name
    }
}

const fo = new Person("Fodela", 24, "male")
fo.age = 25
console.log(fo)
console.log(fo.sayName())

class Department{
    id: string
    name: string
    private readonly employees: string[]= []

    constructor(id:string, n:string){
        this.id = id
        this.name = n
    }

    addEmployee(employee:string){
        this.employees.push(employee)
        }

    printEmployees(){
        console.log(this.employees.length, " employee(s)", this.employees)
    
    }
}

const accounting = new Department("d1","Accounting")
accounting.addEmployee("fodela")
accounting.printEmployees()
accounting.addEmployee("keli")
accounting.employees[3] = "focus" //This is supposed to throw an error
accounting.addEmployee("laura")
accounting.printEmployees()


class ITDepartment extends Department{
    constructor(id:string, public admins: string[]){
        super("IT",id)
        this.name 
    }
    whatDepartment(){
        return ("I am in " + this.name + " ID: " + this.id)
    }
}

const mainITOffice = new ITDepartment("MainITOffice", ["Fo"])
console.log(mainITOffice)
console.log(mainITOffice.whatDepartment())
