import axios from "axios";
import { handleAxiosError } from "../helper/handleAxiosError";

export interface SubjectData {
  id: number;
  courseCode: string;
  courseName: string;
  courseDescription: string;
}

export const submitSubjectData = async (data: SubjectData) => {
  try {
    const response = await axios.post(
      "http://localhost:5065/api/subjects",
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log("Subject added:", response.data);
    return response.data;
  } catch (error) {
    handleAxiosError(error, "Failed to submit subject data");
  }
};

export const displaySubjects = async () => {
  try {
    const response = await axios.get("http://localhost:5065/api/subjects");
    console.log("All subjects:", response.data);
    return response.data;
  } catch (error) {
    handleAxiosError(error, "Failed to fetch subject data");
  }
};
