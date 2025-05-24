export interface StudentData {
  fullname: string;
  email: string;
  section: string;
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
