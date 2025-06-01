import React from "react";
import { Sidebar, Header } from "../components";
import { Outlet } from "react-router-dom";

const MainPage: React.FC = () => {
  return (
    <div className="flex w-full h-screen overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <div className="flex-1 overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
