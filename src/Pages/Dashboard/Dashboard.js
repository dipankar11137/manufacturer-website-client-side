import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);

    return (
        <div>
            <div>
                <div class="drawer drawer-mobile">
                    <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
                    <div class="drawer-content ">
                        <h2 className='text-4xl text-purple-500 font-bold text-center my-3 uppercase'>Welcome to Our DashBoard</h2>
                        <Outlet></Outlet>
                    </div>
                    <div class="drawer-side ml-4">
                        <label for="dashboard-sidebar" class="drawer-overlay"></label>
                        <ul class="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                            {/* <!-- Sidebar content here --> */}
                            <li><Link to="/dashboard">Booking Order</Link></li>
                            <li><Link to="/dashboard/review">My Review</Link></li>
                            <li><Link to="/dashboard/history">History</Link></li>
                            {/* <li><Link to="/dashboard/users">All Users</Link></li> */}
                            <>
                                {admin && <li><Link to="/dashboard/users">All Users</Link></li>}
                                {admin && <li><Link to="/dashboard/addNewProduct">Add New Product</Link></li>}
                                {admin && <li><Link to="/dashboard/manageProduct">Manage Product</Link></li>}
                            </>
                        </ul>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;