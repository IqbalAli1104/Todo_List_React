import { createSlice } from "@reduxjs/toolkit";

const todoReducer = createSlice({
    name : "todos",
    initialState : [

    ],
    reducers: {
        addTodo: (state,action) => {
            const newTodo = {
                id : Date.now(),
                title : action.payload.title,
                completed : false
            };
            state.push(newTodo)
        },
        toggleComplete: (state,action) => {
            const index = state.findIndex(
                (todo) => todo.id === action.payload.id
            );
            state[index].completed = action.payload.completed
        },
        deletetodo: (state,action) =>{
            return state.filter((todo) => todo.id !== action.payload.id)
        },
        updateTodo: (state, action) => {
            const index = state.findIndex(
                (todo) => todo.id === action.payload.id
            );
            state[index].title = action.payload.title
        }
    }
})
export const {
    addTodo,
    toggleComplete,
    deletetodo,
    updateTodo
} = todoReducer.actions;

export default todoReducer.reducer;