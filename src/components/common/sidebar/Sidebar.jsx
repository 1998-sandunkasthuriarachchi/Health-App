import React, { useState } from "react";
import { NavLink } from 'react-router-dom';

import logo from "../../../assets/doc.png";
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import { menu } from "../../../util/constant/nav";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const [ isActive, setIsActive ] =useState(true);

  return (
    <div
      className={`${
        open ? "w-72" : "w-20"
      } duration-300 h-screen p-4 pt-8 bg-white shadow-lg relative`}
    >
      <div className="absolute -right-3 top-9 " onClick={() => setOpen(!open)}>
        <div className="rounded-full p-2 bg-white shadow-md cursor-pointer ">
          {open ? (
            <MdOutlineArrowBackIosNew className="text-sm" />
          ) : (
            <MdOutlineArrowForwardIos className="text-sm" />
          )}
        </div>
      </div>
      <div className="flex gap-x-4 items-center">
        <img src={logo} className={`cursor-pointer duration-500 w-12 ${open && 'rotate-[360deg]'}` }/>
        <h1
          className={`text-black original-left font-bold text-xl duration-300 ${
            !open && "scale-0"
          }`}
        >
          <span className="text-green-500">Doctor</span>App
        </h1>
      </div>
      <ul className="pt-6">
        {menu.map((menu, index) => {
          return (
            <li
              key={index}
              className={`text-gray-500 font-medium text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-blue-100  hover:text-blue-500 rounded-md ${
                menu.gap ? "mt-9" : "mt-2"
              }` }
            >
              {menu.icon}{" "}
              <NavLink to={menu.path} className={`${!open && "hidden"} origin-left duration-200`}>
                <span>
                  {menu.title}
                </span>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
