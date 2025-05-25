import { useState } from "react";

//Services
import type { StudentData } from "../services/studentService";
import { submitStudentData } from "../services/studentService";

export const useNewStudentHook = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const addNewStudent = async (studentsData: StudentData) => {
    setIsLoading(true);
    setError(null);
    setIsSuccess(false);

    try {
      const response = await submitStudentData(studentsData);
      setIsSuccess(true);
      return response;
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : "Something went wrong";
      setError(message);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return { addNewStudent, isLoading, error, isSuccess };
};
