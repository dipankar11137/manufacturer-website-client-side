import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CameraTool from './CameraTool';

const LaptopTools = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/laptops')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (<div>
        <hr />
        <h1 className='text-5xl text-center uppercase font-bold mt-5 text-amber-600'>Laptop Tools Products </h1>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 m-10'>
            {
                products.slice(0, 6).map(product => <CameraTool key={product._id} product={product}></CameraTool>)
            }
        </div>
        <div className='flex justify-end m-8'>
            <Link to='/showAllLaptopTools'><button className='btn btn-primary '>Show All Laptop Tools</button></Link>
        </div>
    </div>
    );
};

export default LaptopTools;