import todoInterface from "../typesInterfaces/todoInterface"

const todoReducer = (state: todoInterface[] , action:{
    type: string
    id: string
    task: string
})=>{
    switch (action.type) {
        case "ADD_TODO":
            return [...state,{
                id: action.id,
                task: action.task,
                isComplete: false
            }
        ]
        case "DO_TODO":
            return state.map(
                todo=>{
                    if (todo.id === action.id){
                        return {...todo, isComplete:true}
                    }else{
                        return todo
                    }
                }
            )
        case "UNDO_TODO":
            return state.map(
                todo => {
                    if (todo.id === action.id){
                        return {...todo, isComplete:false}
                    }else{
                        return todo
                    }
                }
            )
        default:
            throw new Error("Wrong todo reducer type")
    }
}

export default todoReducer