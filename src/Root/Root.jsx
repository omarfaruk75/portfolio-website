import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";



const Root = () => {
    return (
        <div>
            <div className="max-w-7xl mx-auto  bg-gradient-to-r from-[rgb(1,18,30)] to-[#021e33]">
                <Navbar />
                <Outlet />
                <Footer />
            </div>
        </div>
    );
};

export default Root;