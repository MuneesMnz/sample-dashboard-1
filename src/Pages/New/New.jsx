import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
const New = () => {
  return (
    <div className="w-full flex">
      <Sidebar />
      <div className="flex-[6]">
        <Navbar />
        test
      </div>
    </div>
  );
};

export default New;
