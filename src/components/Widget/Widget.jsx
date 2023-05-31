import React, { useContext, useState } from "react";
import { BsChevronUp, BsPerson, BsListCheck, BsCashCoin } from "react-icons/bs";
import { DarkModeContext } from "../../Context/darkModeContext";
const Widget = ({ type }) => {
  const [persentage, setPersentage] = useState(true);
  const {darkMode}=useContext(DarkModeContext)
  let data;
  const amount = 100;
  switch (type) {
    case "user":
      data = {
        title: "USERS",
        isMoney: false,
        link: "See all users",
        icon: (
          <BsPerson className="text-3xl p-1  rounded  self-end text-red-800 bg-red-200 " />
        ),
      };
      break;
    case "order":
      data = {
        title: "ORDERS",
        isMoney: false,
        link: "See all order",
        icon: (
          <BsListCheck className="text-3xl p-1  rounded  self-end text-yellow-800  bg-yellow-200 " />
        ),
      };
      break;
    case "earning":
      data = {
        title: "EARNINGS",
        isMoney: true,
        link: "view net Eraning",
        icon: (
          <BsCashCoin className="text-3xl p-1  rounded  self-end text-green-900 bg-green-200 " />
        ),
      };
      break;
    case "balance":
      data = {
        title: "BALANCE",
        isMoney: true,
        link: "See details",
        icon: (
          <BsPerson className="text-3xl p-1  rounded  self-end text-purple-900 bg-purple-200 " />
        ),
      };
      break;
    default:
      break;
  }
  return (
    <div className={`flex flex-1 p-2 justify-between ${darkMode ? " shadow shadow-white":"shadow-md "} rounded h-[150px]`}>
      <div className="flex flex-col justify-between">
        <span className="font-semibold text-gray-500 text-lg">
          {data.title}
        </span>
        <span className="text-[26px] font-light">
          {data.isMoney && "$"} {amount}
        </span>
        <span className="text-sm border-b border-b-gray-500 w-[max-content]">
          {data.link}
        </span>
      </div>
      <div className="flex flex-col justify-between">
        <div
          className={`flex items-center text-[14px] ${
            persentage ? "text-green-500 " : "text-red-500"
          }`}
        >
          <BsChevronUp />
          20%
        </div>
        {/* <div className='p-1 bg-purple-400 '> */}
        {data.icon}
        {/* </div> */}
      </div>
    </div>
  );
};

export default Widget;
