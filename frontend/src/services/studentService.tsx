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
  const response = await fetch("http://localhost:5065/api/students", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to submit student data");
  }

  return await response.json();
};
