import { success } from 'daisyui/src/colors';
import React from 'react';

const ManageCameraProduct = ({ product, setHandleRemove, setHandleQuantity }) => {
    const { _id, name, img, description, minOrderQuantity, availableQuantity, price } = product;

    const handleQuantity = (id) => { }
    const handleRemove = (id) => {
        alert("You want to remove item");
        if (success) {
            console.log(id);
        }

    }


    return (
        <tr>
            <td>
                <div class="flex items-center space-x-3">
                    <div class="avatar">
                        <div class="mask mask-squircle w-12 h-12">
                            <img src={img} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div class="font-bold">{name}</div>

                    </div>
                </div>
            </td>
            <td>
                <span class="text-xl">{availableQuantity} </span>
            </td>
            <td>
                <button onClick={() => handleQuantity(_id)} class="btn btn-accent">Add Quantity</button>
            </td>
            <th>
                <button onClick={() => handleRemove(_id)} class="btn btn-neutral">Remove</button>
            </th>
        </tr>
    );
};

export default ManageCameraProduct;


{/* <div >
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

        <div class="card-actions justify-between">
            <button onClick={() => handleQuantity(_id)} class="btn btn-accent">Add Quantity</button>
            <button onClick={() => handleRemove(_id)} class="btn btn-neutral">Remove</button>
        </div>
    </div>

</div>
</div> */}