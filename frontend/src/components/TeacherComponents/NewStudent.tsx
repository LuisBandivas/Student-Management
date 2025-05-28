import React, { useEffect } from "react";
import ReactDOM from "react-dom";

//Styles
import { Input } from "../../assets/design/InputStyle";
import { SelectWithValidation } from "../../assets/design/SelectStyle";

//Validation
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

//Hooks
import { useNewStudentHook } from "../../hooks/useNewStudent";

//Components
import { Loader } from "../index";

// Define the validation schema using Yup
const studentSchema = yup.object().shape({
  firstname: yup.string().required("First name is required"),
  lastname: yup.string().required("Last name is required"),
  dob: yup.date().required("Date of birth is required"),
  gender: yup.string().required("gender is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  program: yup.string().required("Program is required"),
  section: yup.string().required("Section is required"),
  yearlevel: yup.string().required("Year level is required"),
});

type AddNewStudentForm = yup.InferType<typeof studentSchema>;

interface NewStudentProps {
  onClose: () => void;
}

const NewStudent: React.FC<NewStudentProps> = (props) => {
  const { onClose } = props;
  const { addNewStudent, isLoading, isSuccess } = useNewStudentHook();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<AddNewStudentForm>({
    resolver: yupResolver(studentSchema),
    mode: "onSubmit",
  });

  const onSubmit = async (data: AddNewStudentForm) => {
    const formattedData = {
      firstname: data.firstname,
      lastname: data.lastname,
      dob: new Date(data.dob).toISOString().split("T")[0],
      gender: data.gender,
      email: data.email,
      program: data.program,
      section: data.section,
      yearLevel: data.yearlevel,
    };

    try {
      await addNewStudent(formattedData);
      reset();
    } catch (error: any) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    if (isSuccess) onClose();
  }, [isSuccess, onClose]);

  return ReactDOM.createPortal(
    <>
      {isLoading ? (
        <Loader description="Adding new student, please wait..." />
      ) : (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-50">
          <div className="w-fit h-fit flex flex-col bg-white rounded-md shadow-lg">
            <header className="w-full border-b flex items-center justify-between px-4 py-3">
              <h6 className="font-semibold">ADD STUDENT</h6>
              <button onClick={onClose} className="w-10 h-10 rounded-md border">
                &times;
              </button>
            </header>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-full flex flex-col gap-3 p-5"
            >
              <div className="w-full flex flex-row gap-4">
                <section className="flex-1">
                  <p className="text-p-sm font-medium">First Name</p>
                  <input
                    type="text"
                    {...register("firstname")}
                    className={Input(!!errors.firstname)}
                    placeholder="Enter student firstname"
                    autoFocus
                  />
                  {errors.firstname && (
                    <p className="text-p-sm text-red-500">
                      {errors.firstname.message}
                    </p>
                  )}
                </section>
                <section className="flex-1">
                  <p className="text-p-sm font-medium">Last Name</p>
                  <input
                    type="text"
                    {...register("lastname")}
                    className={Input(!!errors.lastname)}
                    placeholder="Enter student firstname"
                  />
                  {errors.lastname && (
                    <p className="text-p-sm text-red-500">
                      {errors.lastname.message}
                    </p>
                  )}
                </section>
              </div>
              <section className="w-full">
                <p className="text-p-sm font-medium">Date of Birth</p>
                <input
                  type="date"
                  {...register("dob")}
                  className={Input(!!errors.dob)}
                />
                {errors.dob && (
                  <p className="text-p-sm text-red-500">{errors.dob.message}</p>
                )}
              </section>
              <section className="w-full">
                <p className="text-p-sm font-medium">Gender</p>
                <select
                  {...register("gender")}
                  className={SelectWithValidation(!!errors.gender)}
                >
                  <option value="" disabled>
                    Select Gender
                  </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
                {errors.gender && (
                  <p className="text-p-sm text-red-500">
                    {errors.gender.message}
                  </p>
                )}
              </section>
              <section className="w-full">
                <p className="text-p-sm font-medium">Email Address</p>
                <input
                  type="email"
                  {...register("email")}
                  className={Input(!!errors.email)}
                  placeholder="Enter email"
                />
                {errors.email && (
                  <p className="text-p-sm text-red-500">
                    {errors.email.message}
                  </p>
                )}
              </section>
              <section className="w-full">
                <p className="text-p-sm font-medium">Program</p>
                <select
                  {...register("program")}
                  className={SelectWithValidation(!!errors.program)}
                >
                  <option value="" disabled>
                    Select Program
                  </option>
                  <option value="bscs">
                    BSCS - Bachelor of Science in Computer Science
                  </option>
                  <option value="bsit">
                    BSIT - Bachelor of Science in Information Technology
                  </option>
                </select>
                {errors.program && (
                  <p className="text-p-sm text-red-500">
                    {errors.program.message}
                  </p>
                )}
              </section>
              <div className="w-full flex flex-row gap-4">
                <section className="flex-1">
                  <p className="text-p-sm font-medium">Section</p>
                  <select
                    {...register("section")}
                    className={SelectWithValidation(!!errors.section)}
                  >
                    <option value="" disabled>
                      Select Section
                    </option>
                    <option value="1A">1A</option>
                    <option value="1B">1B</option>
                  </select>
                  {errors.section && (
                    <p className="text-p-sm text-red-500">
                      {errors.section.message}
                    </p>
                  )}
                </section>
                <section className="flex-1">
                  <p className="text-p-sm font-medium">Year Level</p>
                  <select
                    {...register("yearlevel")}
                    className={SelectWithValidation(!!errors.yearlevel)}
                  >
                    <option value="" disabled>
                      Select Year Level
                    </option>
                    <option value="1st">1st Year</option>
                    <option value="2nd">2nd Year</option>
                    <option value="3rd">3rd Year</option>
                    <option value="4th">4th Year</option>
                  </select>
                  {errors.yearlevel && (
                    <p className="text-p-sm text-red-500">
                      {errors.yearlevel.message}
                    </p>
                  )}
                </section>
              </div>
              <button
                type="submit"
                disabled={isLoading}
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

export default NewStudent;
