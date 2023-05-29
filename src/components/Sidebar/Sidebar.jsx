import React from "react";
import { MdDashboard } from "react-icons/md";
import {
  AiOutlineClose,
  AiOutlineDashboard,
  AiFillShopping,
  AiTwotoneSetting,
  AiOutlineLogin,
  AiOutlineLogout,
} from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { MdOutlineLocalOffer } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { FaTruckMoving, FaListOl, FaBell, FaSnowflake } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className=" flex-1 border-r-[0.5px] min-h-[100vh] ">
      <div className="h-14 flex items-center justify-center border-b-[0.5px]">
        <span className="text-lg text-purple-700 font-semibold">MNZ</span>
      </div>
      <div className="pl-3">
        <ul>
          <p className="text-[12px] font-bold text-gray-500 mt-4 mb-1">MAIN</p>
          <li className="flex items-center p-1 cursor-pointer hover:bg-[#FAE6FA]">
            <MdDashboard className="text-[18px] text-[#8F00FF]" />
            <span className="text-[15px] font-semibold text-gray-500 ml-2 ">
              Dashboard
            </span>
          </li>
          <p className="text-[12px] font-bold text-gray-500 mt-4 mb-1">LIST</p>
          <li className="flex items-center p-1 cursor-pointer hover:bg-[#FAE6FA]">
            <BsFillPersonFill className="text-[18px] text-[#8F00FF]" />
            <span className="text-[15px] font-semibold text-gray-500 ml-2 ">
              Users
            </span>
          </li>
          <li className="flex items-center p-1 cursor-pointer hover:bg-[#FAE6FA]">
            <AiTwotoneSetting className="text-[18px] text-[#8F00FF]" />
            <span className="text-[15px] font-semibold text-gray-500 ml-2 ">
              Product
            </span>
          </li>
          <li className="flex items-center p-1 cursor-pointer hover:bg-[#FAE6FA]">
            <FaListOl className="text-[18px] text-[#8F00FF]" />
            <span className="text-[15px] font-semibold text-gray-500 ml-2 ">
              Orders
            </span>
          </li>
          <li className="flex items-center p-1 cursor-pointer hover:bg-[#FAE6FA]">
            <FaTruckMoving className="text-[18px] text-[#8F00FF]" />
            <span className="text-[15px] font-semibold text-gray-500 ml-2 ">
              Delivery
            </span>
          </li>
          <p className="text-[12px] font-bold text-gray-500 mt-4 mb-1">
            USEFUL
          </p>
          <li className="flex items-center p-1 cursor-pointer hover:bg-[#FAE6FA]">
            <FaBell className="text-[18px] text-[#8F00FF]" />
            <span className="text-[15px] font-semibold text-gray-500 ml-2 ">
              Notificatoins
            </span>
          </li>
          <p className="text-[12px] font-bold text-gray-500 mt-4 mb-1">
            SERVICE
          </p>
          <li className="flex items-center p-1 cursor-pointer hover:bg-[#FAE6FA]">
            <FaSnowflake className="text-[18px] text-[#8F00FF]" />
            <span className="text-[15px] font-semibold text-gray-500 ml-2 ">
              System Health
            </span>
          </li>
          <li className="flex items-center p-1 cursor-pointer hover:bg-[#FAE6FA]">
            <AiOutlineLogin className="text-[18px] text-[#8F00FF]" />
            <span className="text-[15px] font-semibold text-gray-500 ml-2 ">
              Logs
            </span>
          </li>
          <li className="flex items-center p-1 cursor-pointer hover:bg-[#FAE6FA]">
            <AiTwotoneSetting className="text-[18px] text-[#8F00FF]" />
            <span className="text-[15px] font-semibold text-gray-500 ml-2 ">
              Settings
            </span>
          </li>
          <p className="text-[12px] font-bold text-gray-500 mt-4 mb-1">USER</p>
          <li className="flex items-center p-1 cursor-pointer hover:bg-[#FAE6FA]">
            <AiOutlineLogout className="text-[18px] text-[#8F00FF]" />
            <span className="text-[15px] font-semibold text-gray-500 ml-2 ">
              Logout
            </span>
          </li>
        </ul>
      </div>
      <div className="flex items-center m-2 [&>*:nth-child(3)]:bg-[#8F00FF]  [&>*:nth-child(1)]:bg-[white] [&>*:nth-child(2)]:bg-[black] ">
        <div className="w-5 h-5 rounded border border-soild  m-1  border-[#8F00FF]"></div>
        <div className="w-5 h-5 rounded border border-soild m-1  border-[#8F00FF]"></div>
        {/* <div className="w-5 h-5 rounded border border-soild  m-1 border-[#8F00FF]"></div> */}
      </div>
    </div>
  );
};

export default Sidebar;
