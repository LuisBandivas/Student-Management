import { configureStore } from "@reduxjs/toolkit";
import studentReducer from "../Slices/StudentSlice";
import subjectReducer from "../Slices/SubjectSlice";
import studentPerSubjectReducer from "../Slices/StudentPerSubjectSlice";

const Store = configureStore({
  reducer: {
    students: studentReducer,
    subjects: subjectReducer,
    studentsPerSubject: studentPerSubjectReducer,
  },
});

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
export default Store;
