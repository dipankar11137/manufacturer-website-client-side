import React from 'react';
import { useNavigate } from 'react-router-dom';

const CameraTool = ({ product }) => {
    const { _id, name, img, description, minOrderQuantity, availableQuantity, price } = product;
    const navigate = useNavigate();

    const handleBooking = (id) => {
        console.log(id);

    }
    return (
        <div className=''>
            <div class="card w-96 glass p-2 shadow-xl">
                <div className=' flex justify-center'>
                    <img className='w-72 h-64 rounded-xl' src={img} alt="" />
                </div>
                <div class="card-body">
                    <h2 class="card-title text-2xl font-bold">{name}</h2>
                    <p>{description}</p>
                    <p className='font-bold '>Min Order Quantity : {minOrderQuantity}</p>
                    <p className='font-bold '>Available Products : {availableQuantity}</p>
                    <p className='font-bold '>Price : {price} /per</p>
                    <div class="card-actions justify-end">
                        <button onClick={() => handleBooking(_id)} class="btn btn-primary">Book Now</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CameraTool;