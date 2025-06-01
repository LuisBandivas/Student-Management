import React from "react";

interface SubjectCardProps {
  data: {
    id: number;
    courseCode: string;
    courseName: string;
    courseDescription: string;
  };
  onClick: (id: number) => void;
}

const SubjectCard: React.FC<SubjectCardProps> = ({ data, onClick }) => {
  return (
    <div
      onClick={() => onClick(data.id)}
      className="w-full aspect-square border bg-white rounded-lg p-4 shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl cursor-pointer"
    >
      <div className="flex flex-col h-full">
        <div className="w-full h-2/6">
          <p className="text-lg font-semibold text-gray-800">
            {data.courseCode}
          </p>
        </div>
        <div className="flex-1 flex flex-col gap-3">
          <p className="text-p-rg font-semibold text-blue-600">
            {data.courseName}
          </p>
          <p className="text-sm text-gray-600 line-clamp-3">
            {data.courseDescription}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SubjectCard;
