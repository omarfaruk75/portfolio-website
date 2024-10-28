
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FaDownload } from "react-icons/fa";

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const menuItem = <>
        <li onClick={toggleDropdown}>
            <NavLink to='/' activeClassName="active" exact>Home</NavLink>
        </li>
        <li onClick={toggleDropdown}>
            <NavLink to='/about' activeClassName="active">About</NavLink>
        </li>
        <li onClick={toggleDropdown}>
            <NavLink to='/contact' activeClassName="active">Contact</NavLink>
        </li>
        <li onClick={toggleDropdown}>
            <NavLink to='/portfolio' activeClassName="active">Portfolio</NavLink>
        </li>
    </>;

    return (
        <div className="px-16">
            <div className=' text-white shadow-lg shadow-slate-300 rounded-2xl'>
                <div className="navbar rounded-xl z-30 px-12">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div
                                tabIndex={0}
                                role="button"
                                className="btn btn-ghost lg:hidden"
                                onClick={toggleDropdown}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </div>
                            {isDropdownOpen && (
                                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[10] p-2 shadow text-black bg-white rounded-box w-52">
                                    {menuItem}
                                </ul>
                            )}
                        </div>
                        {/* <Link to='/' >
                            <img
                                // className='hidden md:block'
                                src='https://i.ibb.co/K0GZfFK/Group-21.png'
                                alt='logo'
                                width='100'
                                height='100'
                            />
                        </Link> */}
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {menuItem}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <a
                            href="omar_faruk.pdf"
                            download="omar_faruk.pdf"
                            className="text-white flex flex-row justify-center items-center gap-x-2"
                        >
                            Resume <FaDownload />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
