import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="">
            <div className="navbar bg-base-100 container mx-auto pt-7">
                <div className="flex-1">
                    <a>
                        <img src="/Logo.png" alt="logo" />
                    </a>
                </div>
                <div className="flex-none">
                    <ul className=" menu-horizontal gap-14 ">

                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="donation">Donation</NavLink></li>
                        <li><NavLink to="statistics">Statistics</NavLink></li>

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;