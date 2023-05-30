import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import Widget from "../../components/Widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import ListTable from "../../components/Table/Table";

const Home = () => {
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
          <Chart />
        </div>
        <div className="p-5 m-5 shadow-md">
          <div className="font-semibold mb-4 text-gray-700"> 
              Heading
          </div>
          <ListTable />
        </div>
      </div>

    </div>
  );
};

export default Home;
