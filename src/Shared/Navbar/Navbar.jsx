import { Link, NavLink } from "react-router-dom";
// import Topbar from "./Topbar";
import Container from './../Container';
import { useState } from "react";

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false); // State to manage dropdown visibility

    // Function to toggle dropdown visibility
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const navLinks = <>
        <li> <NavLink className={({ isActive }) =>
            isActive ? 'p-0 text-[#51AA1B] pb-1 rounded-none text-[16px] border-b-2 font-medium mt-2 border-[#51AA1B]'
                :
                'font-medium p-0 transition-all duration-200 ease-in-out hover:pb-1 hover:text-[#51AA1B] hover:rounded-none text-[16px] hover:border-b-2 border-[#51AA1B] mt-2'
        } to={'/'}> Home </NavLink> </li>

        <li> <NavLink className={({ isActive }) =>
            isActive ? 'p-0 text-[#51AA1B] pb-1 rounded-none text-[16px] border-b-2 font-medium mt-2 border-[#51AA1B]'
                :
                'font-medium p-0 transition-all duration-200 ease-in-out hover:text-[#51AA1B] hover:pb-1 hover:rounded-none text-[16px] hover:border-b-2 mt-2 border-[#51AA1B]'
        } to={'/features'}>Features </NavLink> </li>

        <li> <NavLink className={({ isActive }) =>
            isActive ? 'p-0 text-[#51AA1B] pb-1 rounded-none text-[16px] border-b-2 font-medium mt-2 border-[#51AA1B]'
                :
                'font-medium p-0 transition-all duration-200 ease-in-out hover:text-[#51AA1B] hover:pb-1 hover:rounded-none text-[16px] hover:border-b-2 mt-2 border-[#51AA1B]'
        } to={'/shop'}> Shop </NavLink> </li>


        <li> <NavLink className={({ isActive }) =>
            isActive ? 'p-0 text-[#51AA1B] pb-1 rounded-none text-[16px] border-b-2 font-medium mt-2 border-[#51AA1B]'
                :
                'font-medium p-0 transition-all duration-200 ease-in-out hover:text-[#51AA1B] hover:pb-1 hover:rounded-none text-[16px] hover:border-b-2 mt-2 border-[#51AA1B]'
        } to={'/gallery'}> Gallery </NavLink> </li>

        <li> <NavLink className={({ isActive }) =>
            isActive ? 'p-0 text-[#51AA1B] pb-1 rounded-none text-[16px] border-b-2 font-medium mt-2 border-[#51AA1B]'
                :
                'font-medium p-0 transition-all duration-200 ease-in-out hover:text-[#51AA1B] hover:pb-1 hover:rounded-none text-[16px] hover:border-b-2 mt-2 border-[#51AA1B]'
        } to={'/about'}> About </NavLink> </li>

        <li> <NavLink className={({ isActive }) =>
            isActive ? 'p-0 text-[#51AA1B] pb-1 rounded-none text-[16px] border-b-2 font-medium mt-2 border-[#51AA1B]'
                :
                'font-medium p-0 transition-all duration-200 ease-in-out hover:text-[#51AA1B] hover:pb-1 hover:rounded-none text-[16px] hover:border-b-2 mt-2 border-[#51AA1B]'
        } to={'/blogs'}> Blogs </NavLink> </li>

    </>


    return (

        <div className="bg-white">

            {/* <Topbar></Topbar> */}
            <Container>
                <div className=" navbar items-center justify-between barlow-regular min-h-[99px] p-0 md:py-3 py-5 ">

                    <div className="">

                        <details className="dropdown">
                            <summary className="m-1 text-white btn bg-transparent border-none hover:bg-transparent lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 font-bold" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </summary>
                            <ul className="p-2 shadow dropdown-content z-50 bg-white rounded-box w-52 text-black space-y-2">
                                {
                                    navLinks
                                }
                            </ul>
                        </details>



                        <Link to={'/'} className="font-bold text-lg md:text-3xl gap-3 flex items-center">
                            <span className="text-[#51AA1B]">Z<span className="text-[#51AA1B]">e</span>n<span className="text-black">Market<span className="text-[#51AA1B]">.</span> </span></span></Link>


                        {/* Nav Menu */}
                        <div className="navbar-center hidden ml-8 lg:flex">
                            <ul className="menu-horizontal space-x-6 ">
                                {
                                    navLinks
                                }
                            </ul>
                        </div>
                    </div>


                    {/* NavEnds */}
                    <div className="">
                        <div className="flex gap-2">
                            <label className="input input-bordered flex items-center gap-2">
                                <input type="text" className="grow" placeholder="Search in ZenMarket" />
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    className="h-4 w-4 opacity-70">
                                    <path
                                        fillRule="evenodd"
                                        d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                        clipRule="evenodd" />
                                </svg>
                            </label>

                            <div className="flex-none">
                                <div className="dropdown dropdown-end">
                                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle" onClick={toggleDropdown}>
                                        <div className="indicator">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                                />
                                            </svg>
                                            <span className="badge badge-sm indicator-item">8</span>
                                        </div>
                                    </div>
                                    {/* Conditionally render dropdown content based on isOpen state */}
                                    {isOpen && (
                                        <div className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
                                            <div className="card-body">
                                                <span className="text-lg font-bold">8 Items</span>
                                                <span className="text-info">Subtotal: $999</span>
                                                <div className="card-actions">
                                                    <button className="btn text-[#51AA1B] btn-block">View cart</button>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>




                        </div>

                    </div>
                </div>
            </Container>
        </div>
    );
};


export default Navbar;