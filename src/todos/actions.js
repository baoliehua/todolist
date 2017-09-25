import {ADD_TODO,TOGGLR_TODO} from "./actionTypes.js";

let nextTodoId = 0;

export const addTodo= {text} =>({
   type:ADD_TODO,
   complete:false,
   id:nextTodoId++,
   text:text   
});

export const toggleTodo= {id} =>({
   type:TOGGLR_TODO,
   id:id,
});

export const removeTodo= {id} =>({
   type:REMOVE_TODO,
   id:id,
});


