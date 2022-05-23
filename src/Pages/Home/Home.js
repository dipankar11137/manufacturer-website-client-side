import React from 'react';
import Footer from '../Share/Footer';
import Banner from './Banner';

const Home = () => {
    return (
        <div className='mt-2'>
            <div className='grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1'>
                <div className=' flex items-center justify-center'>
                    <h1 className='lg:text-8xl sm:text-7xl ml-12 text-center font-bold'>Welcome to my <span className='text-amber-600'>Tools Shop</span></h1>
                </div>
                <div className=' '>
                    <Banner />
                </div>
            </div>
            <Footer />
        </div >
    );
};

export default Home;