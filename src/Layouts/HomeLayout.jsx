import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";



const HomeLayout = () => {
  

    return (
        <div className="font-poppins">
      <Navbar></Navbar>
            <div>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
            
            
        </div>
    );
};

export default HomeLayout;