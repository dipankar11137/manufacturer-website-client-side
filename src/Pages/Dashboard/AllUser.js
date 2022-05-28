import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Share/Loading';
import UserRow from './UserRow';


const AllUser = () => {


    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('https://safe-hamlet-14439.herokuapp.com/user', {
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
            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th>Email</th>
                            <th>Add Admin</th>
                            <th>Remove Admin</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(user => <UserRow
                                key={user?._id}
                                user={user}
                                refetch={refetch}
                            ></UserRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUser;