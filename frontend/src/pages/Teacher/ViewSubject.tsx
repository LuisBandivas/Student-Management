import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

// Redux Imports
import { useDispatch, useSelector } from "react-redux";
import { fetchStudentsPerSubject } from "../../Slices/StudentPerSubjectSlice";
import type { RootState, AppDispatch } from "../../Store/Store";

// Components
import { Loader } from "../../components/index";
import { StudentsTable } from "../../components/TeacherComponents";

const ViewSubject: React.FC = () => {
  const { subjectId } = useParams<{ subjectId: string }>();
  const dispatch = useDispatch<AppDispatch>();
  const { studentsPerSubject, loading, error } = useSelector(
    (state: RootState) => state.studentsPerSubject
  );
  console.log("Subject ID:", subjectId);
  useEffect(() => {
    dispatch(fetchStudentsPerSubject(parseInt(subjectId || "0")));
  }, [dispatch, subjectId]);

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
        </section>
      </header>
      <div className="flex-1 flex flex-col gap-3 bg-slate-50 rounded-lg p-4 shadow-sm shadow-slate-200 overflow-hidden">
        <header className="w-full h-fit flex flex-row items-center justify-between">
          <p className="flex items-center gap-2 text-p-sm">
            <div className="w-6 h-6 rounded-md bg-red-400"></div>
            {studentsPerSubject.length} Students Enrolled
          </p>
          <article className="w-fit flex flex-row gap-3 text-p-sm">
            <p className="text-f-dark font-semibold">CS101</p>
            <p className="text-blue-500 font-semibold">
              INTRODUCTION TO PROGRAMMING
            </p>
          </article>
        </header>
        {loading ? (
          <Loader description="Fetching student data, Please wait..." />
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <StudentsTable students={studentsPerSubject} />
        )}
      </div>
    </section>
  );
};

export default ViewSubject;
