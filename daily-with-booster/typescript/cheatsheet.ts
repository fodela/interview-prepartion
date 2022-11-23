// Core types

const myName : string = "Hello World!"
const myAge : number = 24
const imHandsome : boolean = true

// It is better to let typescript infer the type
const myFavFood : {
   name:string 
   preference: number
} = {name: "spag",
    preference: 1    
}

const myHobbies : string[] = ["coding", "playing football", "solving problems"]
const mixArr : any[] = ["coding", 1,true]

