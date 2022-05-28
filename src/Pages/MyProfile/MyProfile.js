import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const MyProfile = () => {
    const [user] = useAuthState(auth);
    const [myData, setMyData] = useState([]);

    const email = user?.email;

    useEffect(() => {
        fetch(`http://localhost:5000/userProfile/${email}`)
            .then(res => res.json())
            .then(data => setMyData(data))
    }, [])

    return (
        <div>
            <h1 className='text-2xl text-center uppercase mt-3 font-bold text-blue-900'>My Profile</h1>
            {
                myData.map(data => <>
                    <div className='flex justify-center'>
                        <div class="card w-96 bg-base-100 shadow-xl">
                            <figure><img src={data?.userImg} alt="Shoes" /></figure>
                            <div class="card-body">
                                <p><small>{data?.aboutYourself}</small></p>
                                <h2 class="card-title">Name : {data?.username}</h2>
                                <p>Gender : {data?.gender}</p>
                                <p>Address : {data?.address}</p>
                            </div>
                        </div>
                    </div>

                </>)

            }

        </div>
    );
};

export default MyProfile;