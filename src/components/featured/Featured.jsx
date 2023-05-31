import React, { useContext } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import { BsThreeDotsVertical, BsChevronDown } from "react-icons/bs";
import "react-circular-progressbar/dist/styles.css";
import { DarkModeContext } from "../../Context/darkModeContext";

const Featured = () => {
  const {darkMode}=useContext(DarkModeContext)
  const color = true;
  return (
    <div className={`flex-[2] ${darkMode ? "shadow shadow-white" :"shadow-md" } p-2.5 `}>
      <div className="flex items-center justify-between text-gray-500">
        <div className="text-lg">Total Revenue</div>
        <BsThreeDotsVertical size={14} />
      </div>
      <div className="p-5 flex flex-col items-center justify-center gap-4">
        <div className="w-[100px] h-[100px]">
          <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
        </div>
        <p className="font-semibold text-gray-700">Total sales made today</p>
        <p className="text-4xl ">$420</p>
        <p className="text-center text-gray-500">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
          facere.
        </p>
        <div className="flex items-center justify-between w-full">
          <div className="text-center">
            <div className="text-[14px] text-gray-700 font-semibold">
              Target
            </div>
            <div
              className={`flex items-center mt-2 text-[14px] ${
                color ? "text-green-500" : "text-red-500"
              }`}
            >
              <BsChevronDown size={13} />
              <div>$12.4k</div>
            </div>
          </div>

          <div className="text-center">
            <div className="text-[14px] text-gray-700 font-semibold">
              Last Week
            </div>
            <div
              className={`flex items-center mt-2 text-[14px] ${
                color ? "text-green-500" : "text-red-500"
              }`}
            >
              <BsChevronDown size={13} />
              <div>$12.4k</div>
            </div>
          </div>

          <div className="text-center">
            <div className="text-[14px] text-gray-700 font-semibold">
              Last Month
            </div>
            <div
              className={`flex items-center mt-2 text-[14px] ${
                color ? "text-green-500" : "text-red-500"
              }`}
            >
              <BsChevronDown size={13} />
              <div>$12.4k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
