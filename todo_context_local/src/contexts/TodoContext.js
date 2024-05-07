import { createContext , useContext } from "react";

export const TodoContext =  createContext({
    todos:[
        {
            id:1,
            todo:"Todo msg",
            completed : false,
        }
    ],
     // functionalities of todo -> only names we don't write definition
     addTodo: (todo) => {},
     updateTodo : (id,todo) => {},
     deleteTodo : (id) => {},
     toggleComplete: (id) => {}
})


export const useTodo = () =>{
    return useContext(TodoContext) // whenever we call useContext usko ek context dena padega
}

export const Todoprovider = TodoContext.Provider