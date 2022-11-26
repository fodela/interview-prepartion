// interfaces

interface Person{
    name:string
    age:number

    greet(phrase:string):void
}

const user1 : Person = {
    name: "Fodela",
    age: 24,
    greet: (phrase)=>{
        console.log(phrase)
        return ('this should be an error!')
    }
}

console.log(user1.greet("Hi my name is"))

//  Interface can dictate the structure of a class

interface Greetable{
    name: string

    greet( phrase:string ):void
}

class Speaker implements Greetable{
    name: string

    constructor(name:string){
        this.name = name
    }

    greet(phrase: string): void {
        console.log(`Hi there ${phrase} ${this.name}`)
    }
}