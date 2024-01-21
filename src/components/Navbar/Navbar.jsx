import React from 'react';
import { ImBriefcase } from "react-icons/im";
import { IoMenu } from "react-icons/io5";
import { NavLink } from 'react-router-dom';
import { IoCloseOutline } from "react-icons/io5";
import { useState } from 'react';

const Navbar = () => {

   const [isOpen , setIsOpen] = useState(false);

   const handleNavbarOpen = ()=>{
       
    setIsOpen(!isOpen);
   }





    return (
        <div className='text-white bg-slate-800 p-2 lg:p-5 rounded-lg lg:flex lg:justify-between items-center'>
                {/* ////////// Navbar Section 1: Logo and Menu icon container /////////////////////// */}

                <div className='flex justify-between'>
                        {/* ============ For Logo ================== */}
                        <div className='text-3xl flex items-center gap-1 font-bold font-serif'>
                             <ImBriefcase /> <span className='mt-1'>Job Finder</span>
                         </div> 



                        {/* ============ For Menu icon =============== */}
                        <div className='text-4xl lg:hidden' onClick={handleNavbarOpen}>
                           {
                              isOpen === true? <IoCloseOutline /> : <IoMenu /> 
                           } 
                        </div>
                </div>


                {/* /////////// Navbar Section 2 : Navbar Items */}
                <div className={`${isOpen===true? 'block' : 'hidden'} lg:w-4/12 lg:flex  lg:justify-around items-center lg:me-9 mt-7 lg:mt-0`}>
                        <NavLink to="/" className={`${({ isActive }) => isActive ? "active block lg:inline" : "block lg:inline"} mb-4 lg:mb-0`}>Home</NavLink>
                        <NavLink to="/applied-jobs" className={`block mb-4 lg:mb-0`}>Applied Jobs</NavLink>
                        <NavLink to="/contact-us" className={`block mb-4 lg:mb-0`}>Contact Us</NavLink>
                        <NavLink to="/about-us" className={`block mb-4 lg:mb-0`}>About Us</NavLink>

                </div>
        </div>
    );
};

export default Navbar;