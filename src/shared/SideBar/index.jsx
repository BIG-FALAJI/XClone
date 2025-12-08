import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { GoHomeFill } from "react-icons/go";
import { CiSearch } from "react-icons/ci";
import { FaRegBell, FaRegEnvelope, FaUser } from "react-icons/fa";
import { MdOutlineMoreHoriz } from "react-icons/md";
import Button from "../Button";
import { Link, NavLink } from "react-router";

const Sidebar = () => {
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
    <>
      {/* Sidebar for medium+ screens */}
      <aside className="hidden sm:flex flex-col justify-between h-screen py-6 px-4 border-r border-gray-800 bg-black text-white fixed left-0 top-0">
        {/* Logo */}
        <div>
          <Link to={"/"}>
            <FaXTwitter className="text-[3.5rem] mx-auto mb-6 cursor-pointer hover:bg-gray-900 p-2 rounded-full" />
          </Link>

          {/* Menu */}
          <nav className="flex flex-col gap-2">
            {menuItems.map((item, index) => (
              <NavLink
                to={item.path}
                key={index}
                className={({ isActive }) =>
                  `flex items-center gap-4 py-3 px-4 rounded-full cursor-pointer transition 
                  ${
                    isActive
                      ? "bg-gray-800 text-white font-semibold"
                      : "hover:bg-gray-900"
                  }`
                }
              >
                {item.icon}
                <span className="hidden xl:inline text-lg font-semibold">
                  {item.label}
                </span>
              </NavLink>
            ))}
          </nav>

          {/* Post Button */}
          <Button className="bg-blue-500 hover:bg-blue-600 text-white font-bold w-full mt-6 rounded-full py-3 hidden xl:block">
            Post
          </Button>
        </div>

        {/* Profile Section */}
        <Link
          to={"/profiles"}
          className="flex items-center justify-between hover:bg-gray-900 rounded-full p-3 cursor-pointer mt-auto"
        >
          <img
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Falaji"
            alt="User avatar"
            className="w-10 h-10 rounded-full"
          />
          <div className="hidden xl:flex flex-col text-sm">
            <span className="font-bold">Big Falaji</span>
            <span className="text-gray-500">@falaji</span>
          </div>
          <MdOutlineMoreHoriz size={20} className="hidden xl:inline" />
        </Link>
      </aside>
    </>
  );
};

export default Sidebar;
