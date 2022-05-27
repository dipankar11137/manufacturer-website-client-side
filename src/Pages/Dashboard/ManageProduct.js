import React, { useEffect, useState } from 'react';
import Footer from '../Share/Footer';
import ManageCameraProduct from './ManageCameraProduct';

const ManageProduct = () => {
    const [products, setProducts] = useState([]);
    const [handleQuantity, setHandleQuantity] = useState([]);
    const [handleRemove, setHandleRemove] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/cameraProducts')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    return (
        <div>
            <h1 className='text-center text-6xl mt-7 font-bold text-purple-900 uppercase mb-4'>Manage Camera Tools</h1>

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
                                    key={product._id} product={product}
                                    setHandleRemove={setHandleRemove}
                                    setHandleQuantity={setHandleQuantity}
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