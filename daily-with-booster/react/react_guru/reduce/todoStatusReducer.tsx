import todoInterface from "../typesInterfaces/todoInterface"

const todoStatusReducer = (state: string, action:{
    type: string

})=>{
    switch(action.type){
        
        case "SHOW_ALL":
            return "ALL"
            
        case "SHOW_COMPLETE":
            return "COMPLETE"

        case "SHOW_INCOMPLETE":
            return "INCOMPLETE"
        
        default:
            throw new Error("Wrong type")
        
    }

}

export default todoStatusReducer