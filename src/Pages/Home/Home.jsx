import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import Widget from "../../components/Widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import ListTable from "../../components/Table/Table";
import { useContext } from "react";
import { DarkModeContext } from "../../Context/darkModeContext";

const Home = () => {
  const {darkMode}=useContext(DarkModeContext)
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-[6]">
        <Navbar />
        <div className="flex p-5 gap-5">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="flex py-1 px-5 gap-5">
          <Featured />
          <Chart aspect={2/1} title="Last 6 Month (Revenue)" />
        </div>
        <div className={`p-5 m-5 ${darkMode ? "shadow shadow-white" :"shadow-md"}`}>
          <div className={`font-semibold mb-4 ${darkMode ? "text-gray-200" :"text-gray-500"}`}> 
              Heading
          </div>
          <ListTable  />
        </div>
      </div>

    </div>
  );
};

export default Home;
