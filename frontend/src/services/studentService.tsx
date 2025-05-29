import axios from "axios";
import { handleAxiosError } from "../helper/handleAxiosError";

import type { StudentData } from "../types/TeacherTypes";

export const submitStudentData = async (data: StudentData) => {
  try {
    const response = await axios.post(
      "http://localhost:5065/api/students",
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log("Student added:", response.data);
    return response.data;
  } catch (error) {
    handleAxiosError(error, "Failed to submit student data");
  }
};

export const displayAllStudent = async () => {
  try {
    const response = await axios.get("http://localhost:5065/api/students");
    console.log("All students:", response.data);
    return response.data;
  } catch (error) {
    handleAxiosError(error, "Failed to fetch student data");
  }
};
