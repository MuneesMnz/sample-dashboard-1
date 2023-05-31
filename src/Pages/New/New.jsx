import React, { useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import { FaUpload } from "react-icons/fa";
const New = ({ inputs, title }) => {
  const [file, setFile] = useState("");
  console.log(file);
  return (
    <div className="w-full flex">
      <Sidebar />
      <div className="flex-[6]">
        <Navbar />
        <div className="shadow flex p-2.5 m-5">
          <h1 className="text-xl font-semibold text-gray-500">{title}</h1>
        </div>
        <div className="shadow-md flex p-2.5 m-5">
          <div className="flex-1 flex justify-center">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://t4.ftcdn.net/jpg/04/99/93/31/360_F_499933117_ZAUBfv3P1HEOsZDrnkbNCt4jc3AodArl.jpg"
              }
              className="w-[250px] h-[250px] object-cover  "
              alt="no Image"
            />
          </div>
          <div className="flex-[2]">
            <form>
              <div className="flex  flex-wrap gap-5 justify-between">
                <div className="w-[40%] mb-2">
                  <label
                    htmlFor="file"
                    className="flex  items-center gap-3 text-lg"
                  >
                    <span>Image :</span> <FaUpload className="cursor-pointer" />
                  </label>
                  <input
                    type="file"
                    id="file"
                    onChange={(e) => setFile(e.target.files[0])}
                    style={{ display: "none" }}
                  />
                </div>
                {inputs.map((inp, index) => {
                  return (
                    <div className="w-[40%] mb-2" key={index}>
                      <label className="flex items-center gap-2.5">
                        {inp.label}
                      </label>
                      <input
                        type={inp.type}
                        className="w-full p-1 border-b outline-none  border-b-gray-500 "
                        placeholder={inp.placeholder}
                      />
                    </div>
                  );
                })}
              </div>
              <button
                className="w-[150px] p-2.5 bg-teal-800 text-white font-semibold mt-5 rounded "
                type="submit"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
