import React from "react";
import { StudentsTable } from "../../components/TeacherComponents";
import type { StudentData } from "../../types/TeacherTypes";

const ViewSubject: React.FC = () => {
  const students: StudentData[] = [
    {
      id: 1,
      studentId: "S001",
      firstname: "John",
      lastname: "Doe",
      dob: "2001-02-15",
      program: "BS Computer Science",
      section: "A",
      yearLevel: "1st Year",
      gender: "Male",
      email: "john.doe@example.com",
    },
    {
      id: 2,
      studentId: "S002",
      firstname: "Jane",
      lastname: "Smith",
      dob: "2000-08-22",
      program: "BS Computer Science",
      section: "B",
      yearLevel: "2nd Year",
      gender: "Female",
      email: "jane.smith@example.com",
    },
    {
      id: 3,
      studentId: "S003",
      firstname: "Alice",
      lastname: "Johnson",
      dob: "1999-11-30",
      program: "BS IT",
      section: "A",
      yearLevel: "3rd Year",
      gender: "Female",
      email: "alice.johnson@example.com",
    },
    {
      id: 4,
      studentId: "S004",
      firstname: "Bob",
      lastname: "Brown",
      dob: "2001-03-12",
      program: "BS Information Systems",
      section: "C",
      yearLevel: "1st Year",
      gender: "Male",
      email: "bob.brown@example.com",
    },
    {
      id: 5,
      studentId: "S005",
      firstname: "Charlie",
      lastname: "Davis",
      dob: "2000-04-10",
      program: "BS Computer Science",
      section: "A",
      yearLevel: "3rd Year",
      gender: "Male",
      email: "charlie.davis@example.com",
    },
    {
      id: 6,
      studentId: "S006",
      firstname: "David",
      lastname: "Martinez",
      dob: "2001-05-05",
      program: "BS IT",
      section: "B",
      yearLevel: "1st Year",
      gender: "Male",
      email: "david.martinez@example.com",
    },
    {
      id: 7,
      studentId: "S007",
      firstname: "Eve",
      lastname: "Garcia",
      dob: "2000-09-17",
      program: "BS Computer Science",
      section: "A",
      yearLevel: "2nd Year",
      gender: "Female",
      email: "eve.garcia@example.com",
    },
    {
      id: 8,
      studentId: "S008",
      firstname: "Frank",
      lastname: "Miller",
      dob: "1999-06-03",
      program: "BS Information Systems",
      section: "B",
      yearLevel: "2nd Year",
      gender: "Male",
      email: "frank.miller@example.com",
    },
    {
      id: 9,
      studentId: "S009",
      firstname: "Grace",
      lastname: "Wilson",
      dob: "2001-07-19",
      program: "BS IT",
      section: "C",
      yearLevel: "1st Year",
      gender: "Female",
      email: "grace.wilson@example.com",
    },
    {
      id: 10,
      studentId: "S010",
      firstname: "Hank",
      lastname: "Moore",
      dob: "2000-10-25",
      program: "BS Computer Science",
      section: "B",
      yearLevel: "3rd Year",
      gender: "Male",
      email: "hank.moore@example.com",
    },
    {
      id: 11,
      studentId: "S011",
      firstname: "Ivy",
      lastname: "Taylor",
      dob: "2000-12-02",
      program: "BS IT",
      section: "A",
      yearLevel: "2nd Year",
      gender: "Female",
      email: "ivy.taylor@example.com",
    },
    {
      id: 12,
      studentId: "S012",
      firstname: "Jack",
      lastname: "Anderson",
      dob: "1999-05-15",
      program: "BS Information Systems",
      section: "A",
      yearLevel: "3rd Year",
      gender: "Male",
      email: "jack.anderson@example.com",
    },
    {
      id: 13,
      studentId: "S013",
      firstname: "Lily",
      lastname: "Thomas",
      dob: "2001-01-21",
      program: "BS Computer Science",
      section: "C",
      yearLevel: "1st Year",
      gender: "Female",
      email: "lily.thomas@example.com",
    },
    {
      id: 14,
      studentId: "S014",
      firstname: "Mason",
      lastname: "Jackson",
      dob: "2000-02-28",
      program: "BS IT",
      section: "B",
      yearLevel: "2nd Year",
      gender: "Male",
      email: "mason.jackson@example.com",
    },
    {
      id: 15,
      studentId: "S015",
      firstname: "Nina",
      lastname: "White",
      dob: "2000-07-08",
      program: "BS Information Systems",
      section: "C",
      yearLevel: "3rd Year",
      gender: "Female",
      email: "nina.white@example.com",
    },
    {
      id: 16,
      studentId: "S016",
      firstname: "Oliver",
      lastname: "Harris",
      dob: "1999-09-14",
      program: "BS Computer Science",
      section: "A",
      yearLevel: "2nd Year",
      gender: "Male",
      email: "oliver.harris@example.com",
    },
    {
      id: 17,
      studentId: "S017",
      firstname: "Penny",
      lastname: "Young",
      dob: "2001-11-09",
      program: "BS IT",
      section: "C",
      yearLevel: "1st Year",
      gender: "Female",
      email: "penny.young@example.com",
    },
    {
      id: 18,
      studentId: "S018",
      firstname: "Quinn",
      lastname: "King",
      dob: "2000-03-04",
      program: "BS Computer Science",
      section: "B",
      yearLevel: "2nd Year",
      gender: "Male",
      email: "quinn.king@example.com",
    },
    {
      id: 19,
      studentId: "S019",
      firstname: "Ryan",
      lastname: "Scott",
      dob: "1999-12-18",
      program: "BS Information Systems",
      section: "A",
      yearLevel: "3rd Year",
      gender: "Male",
      email: "ryan.scott@example.com",
    },
    {
      id: 20,
      studentId: "S020",
      firstname: "Sophia",
      lastname: "Lopez",
      dob: "2001-04-27",
      program: "BS IT",
      section: "B",
      yearLevel: "1st Year",
      gender: "Female",
      email: "sophia.lopez@example.com",
    },
  ];

  return (
    <section className="w-full h-full flex flex-col overflow-hidden px-8 py-5 gap-5">
      <header className="w-full h-fit flex flex-row items-center justify-between">
        <button onClick={() => window.history.back()}>
          <span className="w-6 h-6 rounded-md bg-red-400"></span>Go Back
        </button>
        <section className="flex items-center gap-3">
          <input
            type="text"
            name="students"
            className="w-[300px] h-fit px-4 py-3 border rounded-md"
            placeholder="Search Students"
          />
          <button className="w-fit h-fit px-4 py-3 flex gap-2 rounded-md bg-blue-500 text-f-light font-medium">
            <span className="w-6 h-6 rounded-md bg-red-400"></span>
            New Student
          </button>
        </section>
      </header>
      <div className="flex-1 flex flex-col gap-3 bg-slate-50 rounded-lg p-4 shadow-sm shadow-slate-200 overflow-hidden">
        <header className="w-full h-fit flex flex-row items-center justify-between">
          <p className="flex items-center gap-2 text-p-sm">
            <div className="w-6 h-6 rounded-md bg-red-400"></div>
            {students.length} Students Enrolled
          </p>
          <article className="w-fit flex flex-row gap-3 text-p-sm">
            <p className="text-f-dark font-semibold">CS101</p>
            <p className="text-blue-500 font-semibold">
              INTRODUCTION TO PROGRAMMING
            </p>
          </article>
        </header>
        <StudentsTable students={students} />
      </div>
    </section>
  );
};

export default ViewSubject;
