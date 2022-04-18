import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 } from "uuid";
import { Todo } from "../types/todo";


const initialState: Todo[] = [];


const todoSlice = createSlice({
  name: "todos",
  initialState: initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      const newTodo: Todo = { id: v4(), title: action.payload, complated: false };
      state.push(newTodo);
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      return state.filter(todo => todo.id !== action.payload)
    },
    changeTodoComplate: (state, action: PayloadAction<string>) => {
      return state.map(todo => todo.id === action.payload ? {...todo, complated: !todo.complated} : todo );
    }
  }
})

export default todoSlice.reducer;
export const { addTodo, removeTodo, changeTodoComplate } = todoSlice.actions;




