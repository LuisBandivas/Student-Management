import { useState } from "react";
import { NavLink } from "react-router-dom";
import { NavDesign } from "../assets/design/ButtonStyles";

// Icons
import { RxDashboard } from "react-icons/rx";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { LiaBookSolid } from "react-icons/lia";
import { IoCalendarOutline } from "react-icons/io5";
import { MdLogout } from "react-icons/md";
import { TbLayoutSidebarRightExpand } from "react-icons/tb";

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
        <button onClick={toggleSidebar}>
          <TbLayoutSidebarRightExpand
            size={24}
            className={`${
              collapsed ? "rotate-180" : "rotate-0"
            } transition-all duration-700`}
          />
        </button>
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
              <RxDashboard
                className={isActive ? activeIconStyle : inactiveIconStyle}
              />
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
              <HiOutlineUserGroup
                className={isActive ? activeIconStyle : inactiveIconStyle}
              />
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
              <LiaBookSolid
                className={isActive ? activeIconStyle : inactiveIconStyle}
              />
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
              <IoCalendarOutline
                className={isActive ? activeIconStyle : inactiveIconStyle}
              />
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
              <MdLogout
                className={isActive ? activeIconStyle : inactiveIconStyle}
              />
              {!collapsed && <span>Logout</span>}
            </>
          )}
        </NavLink>
      </div>
    </section>
  );
};

export default Sidebar;
