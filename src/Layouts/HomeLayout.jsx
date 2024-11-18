import { Outlet, useLoaderData } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Banner from "../components/Banner";


const HomeLayout = () => {
    const data = useLoaderData()

    return (
        <div className="font-poppins container mx-auto">
        <div className="my-4 border-b-1 shadow-xl">
        <Navbar></Navbar>
        <Banner data={data}></Banner>
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