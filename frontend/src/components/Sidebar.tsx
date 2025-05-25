import { useState } from "react";
import { NavLink } from "react-router-dom";
import { NavDesign } from "../assets/design/ButtonStyles";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const {
    default: defaultStyle,
    active: activeStyle,
    inactive: inactiveStyle,
    icon: { active: activeIconStyle, inactive: inactiveIconStyle },
  } = NavDesign;

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <section
      className={`h-screen bg-white flex flex-col items-center transition-all duration-300 border-r border-gray-600 ${
        collapsed ? "w-24" : "w-64"
      }`}
    >
      <header
        className={`w-full h-fit flex items-center px-5 py-6 ${
          collapsed ? "justify-center" : "justify-between"
        }`}
      >
        <h6
          className={`font-semibold text-lg ${collapsed ? "hidden" : "block"}`}
        >
          BRANDING
        </h6>
        <button
          onClick={toggleSidebar}
          className="bg-slate-500 rounded-md p-3"
        ></button>
      </header>
      <section className="w-full h-fit flex flex-col gap-1 px-5 mt-10">
        <NavLink
          to={"dashboard"}
          className={({ isActive }) =>
            `${defaultStyle} ${isActive ? activeStyle : inactiveStyle}`
          }
        >
          {({ isActive }) => (
            <>
              <div
                className={isActive ? activeIconStyle : inactiveIconStyle}
              ></div>
              {!collapsed && <span>Dashboard</span>}
            </>
          )}
        </NavLink>
        <NavLink
          to={"students"}
          className={({ isActive }) =>
            `${defaultStyle} ${isActive ? activeStyle : inactiveStyle}`
          }
        >
          {({ isActive }) => (
            <>
              <div
                className={isActive ? activeIconStyle : inactiveIconStyle}
              ></div>
              {!collapsed && <span>Enrolled Students</span>}
            </>
          )}
        </NavLink>
        <NavLink
          to={"mysubjects"}
          className={({ isActive }) =>
            `${defaultStyle} ${isActive ? activeStyle : inactiveStyle}`
          }
        >
          {({ isActive }) => (
            <>
              <div
                className={isActive ? activeIconStyle : inactiveIconStyle}
              ></div>
              {!collapsed && <span>My Subjects</span>}
            </>
          )}
        </NavLink>
        <NavLink
          to={"schedule"}
          className={({ isActive }) =>
            `${defaultStyle} ${isActive ? activeStyle : inactiveStyle}`
          }
        >
          {({ isActive }) => (
            <>
              <div
                className={isActive ? activeIconStyle : inactiveIconStyle}
              ></div>
              {!collapsed && <span>Schedule</span>}
            </>
          )}
        </NavLink>
      </section>
      <div className="w-full flex-1 flex items-end justify-end px-5 pb-6">
        <NavLink
          to={"logout"}
          className={({ isActive }) =>
            `${defaultStyle} ${isActive ? activeStyle : inactiveStyle}`
          }
        >
          {({ isActive }) => (
            <>
              <div
                className={isActive ? activeIconStyle : inactiveIconStyle}
              ></div>
              {!collapsed && <span>Logout</span>}
            </>
          )}
        </NavLink>
      </div>
    </section>
  );
};

export default Sidebar;
