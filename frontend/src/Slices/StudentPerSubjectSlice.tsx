import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { displayStudentToSubject } from "../services/studentService";

import type { StudentData } from "../types/TeacherTypes";

interface StudentsPerSubjectState {
  studentsPerSubject: StudentData[];
  loading: boolean;
  error: string | null;
}

const initialState: StudentsPerSubjectState = {
  studentsPerSubject: [],
  loading: false,
  error: null,
};

export const fetchStudentsPerSubject = createAsyncThunk(
  "studentsPerSubject/fetchAll",
  async (subjectId: number) => {
    const data = await displayStudentToSubject(subjectId);
    return data;
  }
);

const StudentPerSubjectSlice = createSlice({
  name: "studentsPerSubject",
  initialState,
  reducers: {
    clearStudentsPerSubject: (state) => {
      state.studentsPerSubject = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchStudentsPerSubject.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchStudentsPerSubject.fulfilled, (state, action) => {
        state.loading = false;
        state.studentsPerSubject = action.payload;
      })
      .addCase(fetchStudentsPerSubject.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Something went wrong";
      });
  },
});

export const { clearStudentsPerSubject } = StudentPerSubjectSlice.actions;
export default StudentPerSubjectSlice.reducer;
