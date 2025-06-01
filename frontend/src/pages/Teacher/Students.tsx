import React, { useEffect, useState } from "react";
import { NewStudent } from "../../components/TeacherComponents";

// Redux Imports
import { useDispatch, useSelector } from "react-redux";
import { fetchStudents } from "../../Slices/StudentSlice";
import type { RootState, AppDispatch } from "../../Store/Store";

// Components
import { Loader } from "../../components/index";
import { StudentsTable } from "../../components/TeacherComponents";

// Styles
import { SearchInput } from "../../assets/design/InputStyle";

// Icons
import { IoSearch } from "react-icons/io5";

const Students: React.FC = () => {
  const [openNewStudent, setOpenNewStudent] = useState<boolean>(false);

  const dispatch = useDispatch<AppDispatch>();
  const { students, loading, error } = useSelector(
    (state: RootState) => state.students
  );

  const { default: defaultStyle, icon: iconStyle } = SearchInput;

  useEffect(() => {
    dispatch(fetchStudents());
  }, [dispatch]);

  const toggleNewStudentModal = () => setOpenNewStudent(!openNewStudent);

  return (
    <section className="w-full h-full flex flex-col overflow-hidden px-8 py-5 gap-5">
      <header className="flex flex-row items-center justify-between">
        <p>Students Information</p>
        <section className="flex items-center gap-3">
          <div className="w-[300px] h-fit relative">
            <input
              type="text"
              name="students"
              className={defaultStyle}
              placeholder="Search Students"
            />
            <IoSearch size={24} className={iconStyle} />
          </div>
          <button
            onClick={toggleNewStudentModal}
            className="w-fit h-fit px-4 py-3 flex gap-2 rounded-md bg-blue-500 text-f-light font-medium"
          >
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
        {loading ? (
          <Loader description="Fetching student data, Please wait..." />
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <StudentsTable students={students} />
        )}
      </div>
      {openNewStudent && <NewStudent onClose={toggleNewStudentModal} />}
    </section>
  );
};

export default Students;
