import React from "react";

interface SubjectCardProps {
  data: {
    Id: number;
    courseCode: string;
    courseName: string;
    courseDescription: string;
  };
}

const SubjectCard: React.FC<SubjectCardProps> = ({ data }) => {
  return (
    <div className="w-[200px] h-[220px] rounded-lg p-3 shadow-md border flex flex-col justify-between">
      <div className="w-full flex items-end justify-between">
        <p>{data.courseCode}</p>
        <p>{data.courseName}</p>
      </div>
      <p>{data.courseDescription}</p>
    </div>
  );
};

export default SubjectCard;
