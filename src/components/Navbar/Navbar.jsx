import React, { useContext } from "react";
import {
  FaSearch,
  FaLanguage,
  FaRegMoon,
  FaBell,
  FaListUl,
} from "react-icons/fa";
import { BsChatLeft, BsFullscreenExit } from "react-icons/bs";
import { DarkModeContext } from "../../Context/darkModeContext";

const Navbar = () => {
  const {darkMode ,dispatch}=useContext(DarkModeContext)
  return (
    <div className={`h-[56px] border-b-[0.5px] flex items-center text-[14px] ${darkMode ? "text-gray-200":"text-gray-500"} `}>
      <div className="flex p-5 items-center justify-between w-full">
        <div className="flex items-center p-1 border rounded">
          <input
            className="outline-none bg-transparent  placeholder:text-[12px]"
            type="text"
            placeholder="Search..."
          />
          <FaSearch />
        </div>
      </div>
      <div className="flex items-center">
        <div className="flex items-center mr-5 cursor-pointer">
          <FaLanguage className="text-xl" />
          English
        </div>
        <div className="flex items-center mr-5 cursor-pointer">
          <FaRegMoon className="text-xl" onClick={()=>dispatch({type:"TOGGLE"})} />
        </div>
        <div className="flex items-center mr-5 cursor-pointer">
          <BsFullscreenExit className="text-xl" />
        </div>
        <div className="flex items-center mr-5 cursor-pointer relative">
          <FaBell className="text-xl" />
          <div className="w-4 h-4 bg-red-700 rounded-full text-white text-[12px] flex justify-center items-center  font-semibold absolute -top-2 -right-2 ">1</div>
        </div>
        <div className="flex items-center mr-5 cursor-pointer relative">
          <BsChatLeft className="text-xl" />
          <div className="w-4 h-4 bg-red-700 rounded-full text-white text-[12px] flex justify-center items-center  font-semibold absolute -top-2 -right-2 ">2</div>
        </div>
        <div className="flex items-center mr-5 cursor-pointer">
          <FaListUl className="text-xl" />
        </div>
        <div className="flex items-center mr-5 cursor-pointer">
          <img
            src={require('../../Assets/Images/profile_user.jpg')}
            alt="Profile"
            className="max-w-10 h-10 rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
