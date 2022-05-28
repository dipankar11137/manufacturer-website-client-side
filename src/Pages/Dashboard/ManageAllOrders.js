import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Share/Loading';
import ManageAllOrder from './ManageAllOrder';

const ManageAllOrders = () => {


    const { data: booking, isLoading, refetch } = useQuery('users', () => fetch(`https://safe-hamlet-14439.herokuapp.com/cameraBooking`, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='my-5'>
            <h1 className='text-4xl text-center my-5 font-bold text-purple-900 uppercase'>Manage ALl Order</h1>
            <div class="overflow-x-auto mx-52 border rounded-xl">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Date</th>
                            <th>Quantity</th>
                            <th>Order Position</th>
                            <th>Remove Product</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            booking.map(book => <ManageAllOrder
                                key={book._id}
                                book={book}
                            ></ManageAllOrder>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageAllOrders;