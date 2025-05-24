import React, { useState } from "react";
import type { StudentData } from "../services/studentService";
import { submitStudentData } from "../services/studentService";

const Students: React.FC = () => {
  const [studentData, setStudentData] = useState<StudentData>({
    fullname: "",
    email: "",
    section: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStudentData({ ...studentData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const result = await submitStudentData(studentData);
      console.log("Student data submitted successfully:", result);
      alert("Student data submitted successfully!");
    } catch (error) {
      console.error("Error submitting student data:", error);
      alert("Failed to submit student data. Please try again.");
    }
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <form onSubmit={handleSubmit} className="w-fit h-fit flex flex-col gap-4">
        <input
          type="text"
          name="fullname"
          value={studentData.fullname}
          onChange={handleChange}
          className="w-[400px] px-4 py-3 rounded-md border border-gray-300"
          placeholder="Enter fullname"
        />
        <input
          type="email"
          name="email"
          value={studentData.email}
          onChange={handleChange}
          className="w-[400px] px-4 py-3 rounded-md border border-gray-300"
          placeholder="Enter email"
        />
        <input
          type="text"
          name="section"
          value={studentData.section}
          onChange={handleChange}
          className="w-[400px] px-4 py-3 rounded-md border border-gray-300"
          placeholder="Enter section"
        />
        <button
          type="submit"
          className="px-4 py-3 w-[400px] bg-blue-400 rounded-md mt-4"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Students;
