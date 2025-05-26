import axios from "axios";
export interface StudentData {
  firstname: string;
  lastname: string;
  dob: string;
  gender: string;
  email: string;
  program: string;
  section: string;
  yearLevel: string;
}

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
    if (axios.isAxiosError(error)) {
      const message =
        error.response?.data?.message ||
        error.response?.data ||
        error.message ||
        "An unknown error occurred";
      throw new Error(`Failed to submit student data: ${message}`);
    }
  }
};

export const displayAllStudent = async () => {
  try {
    const response = await axios.get("http://localhost:5065/api/students");
    console.log("All students:", response.data);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const message =
        error.response?.data?.message ||
        error.response?.data ||
        error.message ||
        "An unknown error occurred";
      throw new Error(`Failed to fetch student data: ${message}`);
    }
  }
};
