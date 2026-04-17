import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../feature/counter/counterSlice";
import usersReducer from "../feature/users/usersSlice";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    users: usersReducer,
  },
});
