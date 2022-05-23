import React from 'react';
import banner1 from '../../Images/banner/banner-4.jpg'
import banner2 from '../../Images/banner/banner-6.jpg'
import banner3 from '../../Images/banner/banner-5.jpg'
import banner4 from '../../Images/banner/banner-6.jpg'

const Banner = () => {
    return (
        <div className=' m-5 '>
            <div class="carousel w-full shadow-2xl rounded-2xl">
                <div id="slide1" class="carousel-item relative w-full">
                    <img className='w-full h-200' src={banner1} alt="" />
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" class="btn btn-circle">❮</a>
                        <a href="#slide2" class="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" class="carousel-item relative w-full">
                    <img className='w-full' src={banner2} alt="" />
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" class="btn btn-circle">❮</a>
                        <a href="#slide3" class="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" class="carousel-item relative w-full">
                    <img className='w-full' src={banner3} alt="" />
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" class="btn btn-circle">❮</a>
                        <a href="#slide4" class="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" class="carousel-item relative w-full">
                    <img className='w-full' src={banner4} alt="" />
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" class="btn btn-circle">❮</a>
                        <a href="#slide1" class="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;