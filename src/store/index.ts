import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import todoSlice from "../fetures/todoSlice";
import userSlice from "../fetures/userSlice";



const store = configureStore({
  reducer: {
    todos: todoSlice,
    user: userSlice
  }
})

export default store;


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

