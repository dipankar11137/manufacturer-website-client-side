import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const UpdateProfile = () => {
    const [user] = useAuthState(auth);
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data)
        const url = `http://localhost:5000/userProfile`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                toast.success('Successfully Update Profile');
                reset();
            })
    }
    return (
        <div className='mb-16'>
            <h1 className='text-4xl text-center uppercase p-3 font-bold'>Update My Profile</h1>
            <div className='flex justify-center'>

                <div className='bg-green-100 p-5 rounded-2xl w-96 mt-2 '>
                    <form className='' onSubmit={handleSubmit(onSubmit)}>
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="input input-bordered bg-white w-full max-w-xs"
                            {...register("username", {
                                required: {
                                    value: true,
                                    message: 'Name is Required'
                                }

                            })}
                        />
                        <label className="label">
                            {errors.Username?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.Username?.message}</span>}
                        </label>

                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="text"
                            value={user.email}
                            className="input input-bordered bg-white w-full max-w-xs"
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: 'Email is Required'
                                }

                            })}
                        />
                        <label className="label">
                            {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.email?.message}</span>}
                        </label>

                        <label className="label">
                            <span className="label-text">Images</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Url"
                            className="input input-bordered bg-white w-full max-w-xs"
                            {...register("userImg", {
                                required: {
                                    value: true,
                                    message: 'Images is Required'
                                }

                            })}
                        />
                        <label className="label">
                            {errors.userImg?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.userImg?.message}</span>}
                        </label>

                        <label className="label">
                            <span className="label-text">About Yourself</span>
                        </label>
                        <input
                            type="text"
                            placeholder="About Yourself"
                            className="input input-bordered bg-white w-full max-w-xs"
                            {...register("aboutYourself", {
                                required: {
                                    value: true,
                                    message: 'About Yourself is Required'
                                }

                            })}
                        />
                        <label className="label">
                            {errors.aboutYourself?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.aboutYourself?.message}</span>}
                        </label>

                        <label className="label">
                            <span className="label-text">Gender</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Input your Gender"
                            className="input input-bordered bg-white w-full max-w-xs"
                            {...register("gender", {
                                required: {
                                    value: true,
                                    message: 'Gender Quantity is Required'
                                }

                            })}
                        />
                        <label className="label">
                            {errors.gender?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.gender?.message}</span>}
                        </label>

                        <label className="label">
                            <span className="label-text">Address</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Address"
                            className="input input-bordered bg-white w-full max-w-xs"
                            {...register("address", {
                                required: {
                                    value: true,
                                    message: 'Address is Required'
                                }

                            })}
                        />
                        <label className="label">
                            {errors.address?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.address?.message}</span>}
                        </label>

                        <input className='btn btn-primary w-full text-white' type="submit" value="Update Profile" />

                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateProfile;