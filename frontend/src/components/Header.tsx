import React from "react";
import { TbMessage2 } from "react-icons/tb";
import { BiBell } from "react-icons/bi";
import { FiUser } from "react-icons/fi";

const Header: React.FC = () => {
  const [profileImage, setProfileImage] = React.useState<string | null>(null);

  return (
    <header className="w-full h-20 border-b flex flex-row items-center justify-between px-5">
      <div>
        <p className="text-p-lg font-bold">LABEL PLACEHOLDER</p>
      </div>
      <div className="flex flex-row items-center gap-3">
        <TbMessage2 size={24} />
        <BiBell size={24} />
        <section className="flex flex-row items-center gap-3 ml-2">
          {profileImage ? (
            <img
              src=""
              alt="Profile Image"
              className="border w-10 h-10 bg-red-500 rounded-full object-cover"
            />
          ) : (
            <div className="w-10 h-10 rounded-full border flex items-center justify-center bg-gray-300">
              <FiUser size={28} color="white" />
            </div>
          )}
          <article className="max-w-[150px] overflow-hidden text-ellipsis">
            <p className="text-p-sm font-semibold">USER NAME</p>
            <p className="text-p-sc text-gray-500">Teacher || Student</p>
          </article>
        </section>
      </div>
    </header>
  );
};

export default Header;
