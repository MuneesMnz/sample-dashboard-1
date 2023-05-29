import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import Widget from "../../components/Widget/Widget";

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
      </div>

    </div>
  );
};

export default Home;
