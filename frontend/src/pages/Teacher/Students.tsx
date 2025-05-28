import React, { useEffect, useState } from "react";
import { NewStudent } from "../../components/TeacherComponents";

import { useDispatch, useSelector } from "react-redux";
import { fetchStudents } from "../../Slices/StudentSlice";
import type { RootState, AppDispatch } from "../../Store/Store";

import { Loader } from "../../components/index";

const Students: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { students, loading, error } = useSelector(
    (state: RootState) => state.students
  );

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [openNewStudent, setOpenNewStudent] = useState<boolean>(false);

  useEffect(() => {
    dispatch(fetchStudents());
  }, [dispatch]);

  const toggleNewStudentModal = () => setOpenNewStudent(!openNewStudent);

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
          <button
            onClick={toggleNewStudentModal}
            className="w-fit h-fit px-4 py-3 flex gap-2 rounded-md bg-blue-500 text-f-light font-medium"
          >
            <span className="w-6 h-6 rounded-md bg-red-400"></span>
            New Student
          </button>
        </section>
      </header>
      <div className="flex-1 flex flex-col gap-3 bg-slate-50 rounded-lg p-4 shadow-sm shadow-slate-200 overflow-hidden">
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
        <div className="flex-1 overflow-y-auto">
          {loading ? (
            <Loader description="Fetching student data, Please wait..." />
          ) : error ? (
            <p className="text-red-500">{error}</p>
          ) : (
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
                    <td className="pl-4 flex-1">{student.studentId}</td>
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
          )}
        </div>
      </div>

      {/* Pagination */}
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
      {openNewStudent && <NewStudent onClose={toggleNewStudentModal} />}
    </section>
  );
};

export default Students;
