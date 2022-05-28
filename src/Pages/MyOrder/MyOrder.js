import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import Loading from '../Share/Loading';
import CameraOrderRow from './CameraOrderRow';

const MyOrder = () => {
    const [user] = useAuthState(auth);

    const email = user?.email;

    const { data: booking, isLoading, refetch } = useQuery('users', () => fetch(`https://safe-hamlet-14439.herokuapp.com/cameraBooking/${email}`, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h1 className='text-4xl text-center my-5 font-bold text-purple-900 uppercase'>My Orders</h1>
            <div class="overflow-x-auto mx-52 border rounded-xl">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Date</th>
                            <th>Quantity</th>
                            <th>Remove Product</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            booking.map(book => <CameraOrderRow
                                key={book._id}
                                book={book}
                            ></CameraOrderRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrder;