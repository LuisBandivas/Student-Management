import React from "react";
import { Sidebar } from "../components";
import { Outlet } from "react-router-dom";

const MainPage: React.FC = () => {
  return (
    <div className="flex w-full h-screen overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="w-full h-20 border-b border-slate-500 p-5"></header>
        <div className="flex-1 overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
