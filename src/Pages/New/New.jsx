import React, { useContext, useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import { FaUpload } from "react-icons/fa";
import { DarkModeContext } from "../../Context/darkModeContext";
import {
  addDoc,
  doc,
  setDoc,
  collection,
  serverTimestamp,
} from "firebase/firestore";
import { auth, storage, db } from "../../Firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const New = ({ inputs, title }) => {
  const [file, setFile] = useState("");
  const [data, setData] = useState({});
  const [Percentage, setpercentage] = useState(null);
  const { darkMode } = useContext(DarkModeContext);

  useEffect(() => {
    const uploadFile = () => {
      const storageRef = ref(storage, file.name);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          setpercentage(progress);
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setData((prev) => ({ ...prev, img: downloadURL }));
          });
        }
      );
    };
    file && uploadFile();
  }, [file]);

  const handleInput = (e) => {
    const id = e.target.id;
    const value = e.target.value;
    setData({ ...data, [id]: value });
  };
  // console.log(data);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await setDoc(doc(db, "product", data.p_name), {
        ...data,
        timeStamp: serverTimestamp(),
      });
    } catch (err) {
      console.log(err);
    }
  };
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
            <form onSubmit={handleSubmit}>
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
                        id={inp.id}
                        type={inp.type}
                        className={`w-full p-1 border-b outline-none bg-transparent  ${
                          darkMode ? "border-b-gray-200 " : "border-b-gray-600 "
                        }`}
                        placeholder={inp.placeholder}
                        onChange={handleInput}
                      />
                    </div>
                  );
                })}
              </div>
              <button
                className="w-[150px] p-2.5 bg-teal-800 text-white font-semibold mt-5 rounded disabled:bg-teal-500 disabled:cursor-not-allowed "
                type="submit"
                disabled={Percentage !== null && Percentage < 100}
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
