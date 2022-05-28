import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Footer from '../Share/Footer';
import ManageCameraProduct from './ManageCameraProduct';

const ManageProduct = () => {
    const [products, setProducts] = useState([]);
    const [cameraProducts, setCameraProducts] = useState();

    useEffect(() => {
        fetch('https://safe-hamlet-14439.herokuapp.com/cameraProducts')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [cameraProducts]);

    const handleRemove = (id) => {
        const proceed = window.confirm('Are you sure ?');
        if (proceed) {
            const url = `https://safe-hamlet-14439.herokuapp.com/cameraProducts/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    const reaming = products.filter(product => product._id !== id)
                    console.log(reaming)
                    setCameraProducts(reaming);
                    toast('Delete this products');
                })
        }

    }

    const handleQuantity = id => {
        const proceed = window.confirm('Are you sure ?');
        if (proceed) {
            const url = `https://safe-hamlet-14439.herokuapp.com/cameraProducts/${id}`;
            fetch(url, {
                method: 'PUT'
            })
                .then(res => res.json())
                .then(data => {
                    const reaming = cameraProducts.filter(product => product._id !== id)
                    setCameraProducts(reaming);
                    toast('Update Quantity');
                })
        }
    }



    return (
        <div>
            <h1 className='text-center text-2xl mt-7 font-bold text-purple-900 uppercase mb-4'>Manage Camera Tools</h1>

            <div>
                <div class="overflow-x-auto w-full">
                    <table class="table w-full">
                        <thead>
                            <tr>
                                <th className='pl-14 text-xl'> Name</th>
                                <th className='text-xl'>Available Quantity</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>


                            {
                                products.map(product => <ManageCameraProduct
                                    key={product._id}
                                    product={product}
                                    handleRemove={handleRemove}
                                    handleQuantity={handleQuantity}
                                ></ManageCameraProduct>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default ManageProduct;