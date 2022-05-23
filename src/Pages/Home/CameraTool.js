import React from 'react';

const CameraTool = ({ product }) => {
    const { name, img, description, minOrderQuantity, availableQuantity, price } = product;
    return (
        <div className=''>
            <div class="card w-96 glass p-2">
                <img src={img} alt="" />
                <div class="card-body">
                    <h2 class="card-title text-2xl font-bold">{name}</h2>
                    <p>{description}</p>
                    <p className='font-bold '>Min Order Quantity : {minOrderQuantity}</p>
                    <p className='font-bold '>Available Products : {availableQuantity}</p>
                    <p className='font-bold '>Price : {price} /per</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">Book Now</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CameraTool;