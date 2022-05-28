import React, { useEffect, useState } from 'react';
import Footer from '../Share/Footer';
import CameraTool from './CameraTool';

const ShowAllCameraProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://safe-hamlet-14439.herokuapp.com/cameraProducts')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [products])
    return (
        <div>
            <h1 className='text-center text-6xl mt-7 font-bold text-purple-900 uppercase mb-4'>All Camera Tools</h1>
            <hr className='mt-5 ' />
            <p className=''></p>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 m-10 shadow-inner p-3'>
                {
                    products.map(product => <CameraTool key={product._id} product={product}></CameraTool>)
                }
            </div>
            <Footer />
        </div>
    );
};

export default ShowAllCameraProducts;