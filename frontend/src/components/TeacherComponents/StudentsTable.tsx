import React, { useState } from "react";

import type { StudentData } from "../../types/TeacherTypes";

interface StudentsTableProps {
  students: StudentData[];
}

const StudentsTable: React.FC<StudentsTableProps> = ({ students }) => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const itemsPerPage = 10;
  const maxPageButtons = 4;
  const totalPages = Math.ceil(students.length / itemsPerPage);
  const currentData = students.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (pageNumber: number) => setCurrentPage(pageNumber);

  const startPage = Math.max(1, currentPage - Math.floor(maxPageButtons / 2));
  const endPage = Math.min(totalPages, startPage + maxPageButtons - 1);
  return (
    <>
      <div className="flex-1 flex flex-col overflow-y-auto">
        <table className="min-w-full table-auto border-collapse text-f-dark overflow-x-auto font-Poppins">
          <thead className="h-12 text-gray-500 text-p-sm">
            <tr>
              <th className="pl-4 flex-1 text-start bg-gray-200 rounded-tl-md border-b text-nowrap">
                STUDENT NO
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
              <tr
                key={index}
                className={`h-16 font-medium ${
                  index % 10 === 0 ? "border-b" : ""
                }`}
              >
                <td className="pl-4 flex-1">{student.schoolId}</td>
                <td className="pl-4 flex-1">
                  {student.firstname + " " + student.lastname}
                </td>
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
      {/* Pagination */}
      <div className="w-full h-fit flex justify-center">
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
    </>
  );
};

export default StudentsTable;
