import React from "react";
import { CiSearch } from "react-icons/ci";
import { FaRegBell, FaRegEnvelope, FaUser } from "react-icons/fa6";
import { GoHomeFill } from "react-icons/go";
import { MdOutlineMoreHoriz } from "react-icons/md";
import { NavLink } from "react-router";

const BottomBar = () => {
  const menuItems = [
    { icon: <GoHomeFill size={24} />, label: "Home", path: "/" },
    { icon: <CiSearch size={24} />, label: "Explore", path: "/explore" },
    {
      icon: <FaRegBell size={24} />,
      label: "Notifications",
      path: "/notifications",
    },
    { icon: <FaRegEnvelope size={24} />, label: "Messages", path: "/messages" },
    { icon: <FaUser size={24} />, label: "Profile", path: "/profiles" },
    { icon: <MdOutlineMoreHoriz size={24} />, label: "" },
  ];
  return (
    <nav className="sm:hidden fixed bottom-0 left-0 w-full bg-black border-t border-gray-800 flex justify-around items-center py-3 text-white z-50">
      {menuItems.slice(0, 5).map((item, index) => (
        <NavLink
          to={item.path}
          key={index}
          className={({ isActive }) =>
            `flex flex-col items-center ${
              isActive ? "text-blue-500" : "text-gray-400 hover:text-white"
            }`
          }
        >
          {item.icon}
        </NavLink>
      ))}
    </nav>
  );
};

export default BottomBar;
