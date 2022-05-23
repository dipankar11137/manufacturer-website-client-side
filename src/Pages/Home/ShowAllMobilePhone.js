import React, { useEffect, useState } from 'react';
import Footer from '../Share/Footer';
import PhoneProduct from './PhoneProduct';

const ShowAllMobilePhone = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    return (<div>
        <h1 className='text-center text-6xl mt-7 font-bold text-purple-900 uppercase mb-4'>All Camera Tools</h1>
        <hr className='mt-5 ' />
        <p className=''></p>
        <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 m-10  p-3'>
            {
                products.map(product => <PhoneProduct key={product._id} product={product}></PhoneProduct>)
            }
        </div>
        <Footer />
    </div>
    );
};

export default ShowAllMobilePhone;