import React, { useContext } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import Chart from "../../components/chart/Chart";
import ListTable from "../../components/Table/Table";
import { DarkModeContext } from "../../Context/darkModeContext";

const Single = () => {
  const {darkMode}=useContext(DarkModeContext)
  return (
    <div className="flex w-full">
      <Sidebar />
      <div className="flex-[6]">
        <Navbar />
        <div className="p-5 flex gap-5">
          <div className="flex-1 shadow-md p-5 relative">
            <div className={`text-xl font font-semibold mb-3 ${darkMode ? "text-gray-200" :"text-gray-500"} `}>
              Information
            </div>
            <div className="flex items-center gap-5 ">
              <img
                src="https://m.media-amazon.com/images/I/7196oQDyF6L.jpg"
                alt=""
                className="w-[100px] h-[100px] object-cover "
              />
              <div className="absolute top-5 right-5 p-1 text-sm text-blue-800 bg-blue-200 border-blue-800  rounded cursor-pointer">
                edit
              </div>

              <div>
                <h1 className="text-4xl font-semibold mb-2">
                  Lays{" "}
                  <span className="text-[16px] text-gray-500">(PepsiCo)</span>
                </h1>
                <div className="mb-2 text-[14px]">
                  <span className="font-semibold text-gray-500 mr-1">
                    Price:
                  </span>
                  <span>30rs per 1packet</span>
                </div>
                <div className="mb-2 text-[14px]">
                  <span className="font-semibold text-gray-500 mr-1">
                    Category:
                  </span>
                  <span>Food</span>
                </div>
                <div className="mb-2 text-[14px]">
                  <span className="font-semibold text-gray-500 mr-1">
                    Stock:
                  </span>
                  <span>15 Available</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-[2]">
            <Chart aspect={3 / 1} title={"Item Stock Details  (Last 6 Month)"} />
          </div>
        </div>
        <div className="p-5 shadow-md mx-5 my-2.5">
          <h1 className="text-xl font font-semibold mb-3 text-gray-500">Last Updations </h1>
          <ListTable />
        </div>
      </div>
    </div>
  );
};

export default Single;
