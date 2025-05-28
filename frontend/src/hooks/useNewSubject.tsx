import { useState } from "react";

// Services
import type { SubjectData } from "../services/subjectService";
import { submitSubjectData } from "../services/subjectService";

export const useNewSubjectHook = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const addNewSubject = async (subjectData: SubjectData) => {
    setIsLoading(true);
    setError(null);
    setIsSuccess(false);

    try {
      const response = await submitSubjectData(subjectData);
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
  return { addNewSubject, isLoading, error, isSuccess };
};
