import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const MainLayOut = () => {
  return (
    <div className=" mx-auto">
       <Navbar></Navbar>
       
      <div>
         <Outlet></Outlet>
      </div>
    </div>
  );
};

export default MainLayOut;
