import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const HomeLayout = () => {
    return (
        <div className="font-poppins container mx-auto">
        <div className="my-4 border-b-1 shadow-xl">
        <Navbar></Navbar>
        </div>
            <div>
                <Outlet></Outlet>
            </div>
            <div>
                <Footer></Footer>
            </div>
            
        </div>
    );
};

export default HomeLayout;