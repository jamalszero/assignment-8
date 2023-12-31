import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const Root = () => {
    return (
        <div className="w-4/5 mx-auto">
            <Navbar></Navbar>
        
            <Outlet></Outlet>
 
        </div>
    );
};

export default Root;