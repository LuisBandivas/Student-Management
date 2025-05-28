import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { displaySubjects } from "../services/subjectService";

interface SubjectData {
  Id: number;
  courseCode: string;
  courseName: string;
  courseDescription: string;
}

interface SubjecstState {
  subjects: SubjectData[];
  loading: boolean;
  error: string | null;
}

const initialState: SubjecstState = {
  subjects: [],
  loading: false,
  error: null,
};

export const fetchSubjects = createAsyncThunk("subjects/fetchAll", async () => {
  const data = await displaySubjects();
  return data;
});

const SubjectSlice = createSlice({
  name: "subjects",
  initialState,
  reducers: {
    clearSubjects: (state) => {
      state.subjects = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSubjects.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSubjects.fulfilled, (state, action) => {
        state.loading = false;
        state.subjects = action.payload;
      })
      .addCase(fetchSubjects.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Something went wrong";
      });
  },
});

export const { clearSubjects } = SubjectSlice.actions;
export default SubjectSlice.reducer;
