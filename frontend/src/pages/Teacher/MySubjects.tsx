import { useState, useEffect } from "react";

// Redux Imports
import { useDispatch, useSelector } from "react-redux";
import { fetchSubjects } from "../../Slices/SubjectSlice";
import type { RootState, AppDispatch } from "../../Store/Store";

// Styling
import { SelectStyle } from "../../assets/design/SelectStyle";

// Components
import { SubjectCard, AddSubject } from "../../components/TeacherComponents";
import { Loader } from "../../components/index";

const MySubjects = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { subjects, loading, error } = useSelector(
    (state: RootState) => state.subjects
  );

  useEffect(() => {
    dispatch(fetchSubjects());
  }, [dispatch]);

  const [addSubjectModal, setAddSubjectModal] = useState<boolean>(false);

  const toggleNewSubject = () => {
    setAddSubjectModal(!addSubjectModal);
  };

  return (
    <section className="w-full h-full flex flex-col overflow-hidden px-8 py-5 gap-5">
      <header className="w-full h-fit flex flex-row justify-between">
        <select name="subjects" className={SelectStyle}>
          <option value="" disabled>
            Select Year
          </option>
          <option value="all">All</option>
          <option value="1st">1st Year</option>
          <option value="2nd">2nd Year</option>
          <option value="3rd">3rd Year</option>
          <option value="4th">4th Year</option>
        </select>
        <button
          onClick={toggleNewSubject}
          className="w-fit h-fit px-4 py-3 flex gap-2 rounded-md bg-blue-500 text-f-light font-medium"
        >
          <span className="w-6 h-6 rounded-md bg-red-400"></span>
          Add Subject
        </button>
      </header>
      {loading ? (
        <Loader />
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <div className="flex-1 grid grid-cols-5 gap-5 overflow-y-auto">
          {subjects.map((subject) => (
            <SubjectCard key={subject.Id} data={subject} />
          ))}
        </div>
      )}
      {addSubjectModal && <AddSubject onClose={toggleNewSubject} />}
    </section>
  );
};

export default MySubjects;
