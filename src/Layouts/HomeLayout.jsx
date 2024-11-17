import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";


const HomeLayout = () => {
    return (
        <div className="font-poppins">
        <div className="my-4 border-b-1 shadow-xl">
        <Navbar></Navbar>
        </div>
            <div>
                <Outlet></Outlet>
            </div>
            
        </div>
    );
};

export default HomeLayout;