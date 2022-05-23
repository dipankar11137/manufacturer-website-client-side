import React from 'react';
import { Link } from 'react-router-dom';



const Navbar = () => {


    const menuItems = <>
        <li className='text-xl font-bold'><Link to="/">Home</Link></li>
        <li className='text-xl font-bold'><Link to="/">About</Link></li>
        <li className='text-xl font-bold' ><Link to="/">My Orders</Link></li>
        <li className='text-xl font-bold' ><Link to="/">Add A Review</Link></li>
        <li className='text-xl font-bold' ><Link to="/">My Profile</Link></li>
        <li className='text-xl font-bold' ><Link to="/dashboard">Dashboard</Link></li>

    </>

    return (

        <div className="navbar bg-blue-100">
            <div className="navbar-start ">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case font-bold text-3xl text-amber-600">Manufacture Tools</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                <label tabIndex="1" for="dashboard-sidebar" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>
        </div>

    );
};

export default Navbar;

