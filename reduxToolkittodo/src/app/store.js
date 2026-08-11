import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../Features/TODO/todoSlice";

export const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});
