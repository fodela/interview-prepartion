interface actionStructure{
    type: string
    payload: {
        newAge: number
    }
}
interface stateStructure{
    name: string
    age: number
}
const me = {
    name:"fodela",
    age:24
}
const bday = {
    type: "INCREASE_AGE",
    payload:{
        newAge: 25
    }
}
const personReducer = (state: stateStructure, action:actionStructure)=>{
    switch (action.type){
        case "INCREASE_AGE":
            return {...state, age: action.payload.newAge}
            
        case "DECREASE_AGE":
            return {...state, age: action.payload.newAge}
        
        default:
            return state
        }
}

console.log(personReducer(me, bday))