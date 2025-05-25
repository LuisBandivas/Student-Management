import React, { useState } from "react";

const dummyData = [
  {
    id: 1,
    name: "Alice Johnson",
    dob: "2001-04-12",
    program: "BS Computer Science",
    section: "A",
    yearLevel: "1st Year",
  },
  {
    id: 2,
    name: "Bob Smith",
    dob: "2000-11-23",
    program: "BS Information Technology",
    section: "B",
    yearLevel: "2nd Year",
  },
  {
    id: 3,
    name: "Carla Reyes",
    dob: "1999-08-30",
    program: "BS Information Systems",
    section: "C",
    yearLevel: "3rd Year",
  },
  {
    id: 4,
    name: "David Lee",
    dob: "2002-03-15",
    program: "BS Software Engineering",
    section: "A",
    yearLevel: "1st Year",
  },
  {
    id: 5,
    name: "Eva Green",
    dob: "2001-01-10",
    program: "BS Computer Engineering",
    section: "B",
    yearLevel: "4th Year",
  },
  {
    id: 6,
    name: "Frank Thomas",
    dob: "2000-07-21",
    program: "BS Computer Science",
    section: "C",
    yearLevel: "3rd Year",
  },
  {
    id: 7,
    name: "Grace Park",
    dob: "1999-12-09",
    program: "BS Information Technology",
    section: "A",
    yearLevel: "2nd Year",
  },
  {
    id: 8,
    name: "Henry Adams",
    dob: "2001-05-25",
    program: "BS Information Systems",
    section: "B",
    yearLevel: "1st Year",
  },
  {
    id: 9,
    name: "Ivy Brooks",
    dob: "2002-06-14",
    program: "BS Software Engineering",
    section: "C",
    yearLevel: "2nd Year",
  },
  {
    id: 10,
    name: "Jake Miller",
    dob: "2000-10-03",
    program: "BS Computer Engineering",
    section: "A",
    yearLevel: "4th Year",
  },
  {
    id: 11,
    name: "Kelly Martin",
    dob: "2001-09-01",
    program: "BS Computer Science",
    section: "B",
    yearLevel: "2nd Year",
  },
  {
    id: 12,
    name: "Liam Scott",
    dob: "2002-02-20",
    program: "BS Information Technology",
    section: "C",
    yearLevel: "3rd Year",
  },
  {
    id: 13,
    name: "Mia Turner",
    dob: "2001-07-19",
    program: "BS Information Systems",
    section: "A",
    yearLevel: "1st Year",
  },
  {
    id: 14,
    name: "Noah Wright",
    dob: "1999-03-04",
    program: "BS Software Engineering",
    section: "B",
    yearLevel: "4th Year",
  },
  {
    id: 15,
    name: "Olivia Young",
    dob: "2000-08-08",
    program: "BS Computer Engineering",
    section: "C",
    yearLevel: "2nd Year",
  },
  {
    id: 16,
    name: "Paul Walker",
    dob: "2001-06-22",
    program: "BS Computer Science",
    section: "A",
    yearLevel: "3rd Year",
  },
  {
    id: 17,
    name: "Quinn Hall",
    dob: "2002-11-11",
    program: "BS Information Technology",
    section: "B",
    yearLevel: "1st Year",
  },
  {
    id: 18,
    name: "Rachel King",
    dob: "2000-12-15",
    program: "BS Information Systems",
    section: "C",
    yearLevel: "2nd Year",
  },
  {
    id: 19,
    name: "Sam Lopez",
    dob: "1999-10-26",
    program: "BS Software Engineering",
    section: "A",
    yearLevel: "4th Year",
  },
  {
    id: 20,
    name: "Tina Harris",
    dob: "2001-03-17",
    program: "BS Computer Engineering",
    section: "B",
    yearLevel: "3rd Year",
  },
];

const Students: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 10;
  const maxPageButtons = 4;
  const totalPages = Math.ceil(dummyData.length / itemsPerPage);

  const currentData = dummyData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (pageNumber: number) => setCurrentPage(pageNumber);

  const startPage = Math.max(1, currentPage - Math.floor(maxPageButtons / 2));
  const endPage = Math.min(totalPages, startPage + maxPageButtons - 1);
  return (
    <section className="w-full h-full flex flex-col overflow-hidden px-8 py-5 gap-5">
      <header className="flex flex-row items-center justify-between">
        <p>Students Information</p>
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
      <div className="flex-1 flex flex-col gap-3 bg-slate-50 rounded-lg p-4 shadow-md overflow-y-auto">
        <header className="w-full h-fit flex flex-row items-center justify-between">
          <select name="subjects" className="p-2 rounded-md border text-p-sm">
            <option value="">All Student</option>
            <option value="">Subject 1</option>
            <option value="">Subject 2</option>
            <option value="">Subject 3</option>
          </select>
          <button className="p-2 rounded-md border text-p-sm bg-green-500">
            Export PDF
          </button>
        </header>
        <table className="min-w-full table-auto border-collapse text-f-dark overflow-x-auto font-Poppins">
          <thead className="h-12 text-gray-500 text-p-sm">
            <tr>
              <th className="pl-4 flex-1 text-start bg-gray-200 rounded-tl-md border-b text-nowrap">
                ID NO
              </th>
              <th className="pl-4 flex-1 text-start bg-gray-200 border-b text-nowrap">
                STUDENT NAME
              </th>
              <th className="pl-4 flex-1 text-start bg-gray-200 border-b text-nowrap">
                DATE OF BIRTH
              </th>
              <th className="pl-4 flex-1 text-start bg-gray-200 border-b text-nowrap">
                PROGRAM
              </th>
              <th className="pl-4 flex-1 text-start bg-gray-200 border-b text-nowrap">
                SECTION
              </th>
              <th className="pl-4 flex-1 text-start bg-gray-200 border-b text-nowrap">
                YEAR LEVEL
              </th>
              <th className="pl-4 flex-1 text-start bg-gray-200 rounded-tr-md border-b text-nowrap">
                ACTION
              </th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((student, index) => (
              <tr key={index} className="h-16 font-medium border-b">
                <td className="pl-4 flex-1">{student.id}</td>
                <td className="pl-4 flex-1">{student.name}</td>
                <td className="pl-4 flex-1">{student.dob}</td>
                <td className="pl-4 flex-1">{student.program}</td>
                <td className="pl-4 flex-1">{student.section}</td>
                <td className="pl-4 flex-1">{student.yearLevel}</td>
                <td className="pl-4 flex-1">
                  <button>...</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`h-8 w-8 md:h-10 md:w-10 mx-1 rounded ${
            currentPage === 1
              ? "bg-gray-400 text-f-light"
              : "bg-gray-200 text-f-gray2"
          }`}
        >
          &lt;
        </button>
        {Array.from({ length: endPage - startPage + 1 }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(startPage + index)}
            className={`h-8 w-8 md:h-10 md:w-10 mx-1 rounded ${
              currentPage === startPage + index
                ? `bg-blue-500 text-f-light`
                : "bg-gray-200 text-f-gray2"
            }`}
          >
            {startPage + index}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`h-8 w-8 md:h-10 md:w-10 mx-1 rounded ${
            currentPage === totalPages
              ? "bg-gray-400 text-f-light"
              : "bg-gray-200 text-f-gray2"
          }`}
        >
          &gt;
        </button>
      </div>
    </section>
  );
};

export default Students;
