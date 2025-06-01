import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { displayAllStudent } from "../services/studentService";

import type { StudentData } from "../types/TeacherTypes";

interface StudentsState {
  students: StudentData[];
  loading: boolean;
  error: string | null;
}

const initialState: StudentsState = {
  students: [],
  loading: false,
  error: null,
};

export const fetchStudents = createAsyncThunk("students/fetchAll", async () => {
  const data = await displayAllStudent();
  return data;
});

const StudentSlice = createSlice({
  name: "studentsPerSubject",
  initialState,
  reducers: {
    clearStudents: (state) => {
      state.students = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchStudents.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchStudents.fulfilled, (state, action) => {
        state.loading = false;
        state.students = action.payload;
      })
      .addCase(fetchStudents.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Something went wrong";
      });
  },
});

export const { clearStudents } = StudentSlice.actions;
export default StudentSlice.reducer;
