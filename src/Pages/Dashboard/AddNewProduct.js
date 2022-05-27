import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddNewProduct = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        const url = `http://localhost:5000/cameraProducts`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                toast.success('Successfully Add This Products');
                reset();
            })
    }

    return (
        <div className=' '>
            <h2 className='mt-5 font-bold text-4xl'>Please add a Product</h2>
            <div className='bg-red-200 p-5 rounded-2xl w-96 mt-5'>
                <form className='' onSubmit={handleSubmit(onSubmit)}>
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Product name"
                        className="input input-bordered bg-white w-full max-w-xs"
                        {...register("name", {
                            required: {
                                value: true,
                                message: 'Name is Required'
                            }

                        })}
                    />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.name?.message}</span>}
                    </label>
                    <label className="label">
                        <span className="label-text">Images</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Url"
                        className="input input-bordered bg-white w-full max-w-xs"
                        {...register("img", {
                            required: {
                                value: true,
                                message: 'Images is Required'
                            }

                        })}
                    />
                    <label className="label">
                        {errors.img?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.img?.message}</span>}
                    </label>

                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Description"
                        className="input input-bordered bg-white w-full max-w-xs"
                        {...register("description", {
                            required: {
                                value: true,
                                message: 'Description is Required'
                            }

                        })}
                    />
                    <label className="label">
                        {errors.description?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.description?.message}</span>}
                    </label>

                    <label className="label">
                        <span className="label-text">Min Order Quantity</span>
                    </label>
                    <input
                        type="number"
                        value={100}
                        className="input input-bordered  bg-white w-full max-w-xs"
                        {...register("minOrderQuantity", {
                            required: {
                                value: true,
                                message: 'Min Order Quantity is Required'
                            }

                        })}
                    />
                    <label className="label">
                        {errors.minOrderQuantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.minOrderQuantity?.message}</span>}
                    </label>

                    <label className="label">
                        <span className="label-text">Available Quantity</span>
                    </label>
                    <input
                        type="number"
                        placeholder="Please put Quantity"
                        className="input input-bordered bg-white w-full max-w-xs"
                        {...register("availableQuantity", {
                            required: {
                                value: true,
                                message: 'Available Quantity is Required'
                            }

                        })}
                    />
                    <label className="label">
                        {errors.availableQuantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.availableQuantity?.message}</span>}
                    </label>

                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input
                        type="number"
                        placeholder="Price"
                        className="input input-bordered bg-white w-full max-w-xs"
                        {...register("price", {
                            required: {
                                value: true,
                                message: 'Price is Required'
                            }

                        })}
                    />
                    <label className="label">
                        {errors.price?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.price?.message}</span>}
                    </label>

                    <input className='btn btn-primary w-full text-white' type="submit" value="ADD" />

                </form>
            </div>
        </div>
    );
};

export default AddNewProduct;