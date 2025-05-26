import { configureStore } from "@reduxjs/toolkit";
import studentReducer from "../Slices/StudentSlice";

const Store = configureStore({
  reducer: {
    students: studentReducer,
  },
});

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
export default Store;
