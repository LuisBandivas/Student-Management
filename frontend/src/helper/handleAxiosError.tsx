import axios from "axios";

export const handleAxiosError = (error: unknown, contextMessage: string) => {
  if (axios.isAxiosError(error)) {
    const message =
      error.response?.data?.message ||
      error.response?.data ||
      error.message ||
      "An unknown error occurred";
    throw new Error(`${contextMessage}: ${message}`);
  } else {
    throw new Error(`${contextMessage}: An unexpected error occurred`);
  }
};
