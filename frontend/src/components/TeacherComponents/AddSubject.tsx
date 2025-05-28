import ReactDOM from "react-dom";
import React, { useEffect } from "react";

//Styles
import { Input } from "../../assets/design/InputStyle";

//Validation
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

//Hooks
import { useNewSubjectHook } from "../../hooks/useNewSubject";

//Components
import Loader from "../Loader";

const subjectSchema = yup.object().shape({
  courseCode: yup.string().required("a"),
  courseName: yup.string().required("b"),
  courseDescription: yup.string().required("c"),
});

type AddSubjectForm = yup.InferType<typeof subjectSchema>;

interface AddSubjectProps {
  onClose: () => void;
}
const AddSubject: React.FC<AddSubjectProps> = (props) => {
  const { onClose } = props;
  const { addNewSubject, isLoading, isSuccess } = useNewSubjectHook();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<AddSubjectForm>({
    resolver: yupResolver(subjectSchema),
    mode: "onSubmit",
  });

  const onSubmit = async (data: AddSubjectForm) => {
    const formattedData = {
      courseCode: data.courseCode,
      courseName: data.courseName,
      courseDescription: data.courseDescription,
    };

    try {
      await addNewSubject(formattedData);
      reset();
    } catch (error) {
      console.error("Error adding subject:", error);
    }
  };

  useEffect(() => {
    if (isSuccess) onClose();
  }, [isSuccess, onClose]);

  return ReactDOM.createPortal(
    <>
      {isLoading ? (
        <Loader description="Adding new subject, please wait..." />
      ) : (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-50">
          <div className="w-[400px] h-fit flex flex-col bg-white rounded-md shadow-lg">
            <header className="w-full border-b flex items-center justify-between px-4 py-3">
              <h6 className="font-semibold">ADD SUBJECT</h6>
              <button onClick={onClose} className="w-10 h-10 rounded-md border">
                &times;
              </button>
            </header>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-full flex flex-col gap-3 p-5"
            >
              <section className="flex-1">
                <p className="text-p-sm font-medium">Course Code</p>
                <input
                  type="text"
                  {...register("courseCode")}
                  className={Input(!!errors.courseCode)}
                  placeholder="Enter course code"
                />
                {errors.courseCode && (
                  <p className="text-p-sm text-red-500">
                    {errors.courseCode.message}
                  </p>
                )}
              </section>
              <section className="flex-1">
                <p className="text-p-sm font-medium">Course Name</p>
                <input
                  type="text"
                  {...register("courseName")}
                  className={Input(!!errors.courseName)}
                  placeholder="Enter course name"
                />
                {errors.courseName && (
                  <p className="text-p-sm text-red-500">
                    {errors.courseName.message}
                  </p>
                )}
              </section>
              <section className="flex-1">
                <p className="text-p-sm font-medium">Course Name</p>
                <input
                  type="text"
                  {...register("courseDescription")}
                  className={Input(!!errors.courseDescription)}
                  placeholder="Enter course description"
                />
                {errors.courseDescription && (
                  <p className="text-p-sm text-red-500">
                    {errors.courseDescription.message}
                  </p>
                )}
              </section>
              <button
                type="submit"
                //disabled={isLoading}
                className="px-4 py-3 w-full bg-blue-400 rounded-md mt-4 text-f-light"
              >
                Confirm
              </button>
            </form>
          </div>
        </div>
      )}
    </>,
    document.body
  );
};

export default AddSubject;
