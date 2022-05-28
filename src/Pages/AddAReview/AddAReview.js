import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddAReview = () => {
    const [user] = useAuthState(auth);
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const navigate = useNavigate();

    const onSubmit = data => {
        console.log(data)
        const url = `http://localhost:5000/reviews`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                toast.success('Successfully Update Review');
                navigate('/');
                reset();
            })
    }

    return (
        <div>
            <h1 className='text-center text-4xl my-3 uppercase text-purple-700 font-bold'>Please Add A Review</h1>
            <div className='flex justify-center'>

                <div className='bg-green-100 p-5 rounded-2xl w-96 mt-2 '>
                    <form className='' onSubmit={handleSubmit(onSubmit)}>
                        <label className="label">
                            <span className="label-text">Review</span>
                        </label>
                        <textarea
                            type="text"
                            placeholder="Your Review"
                            className="input input-bordered bg-white w-full max-w-xs"
                            {...register("review", {
                                required: {
                                    value: true,
                                    message: 'Review is Required'
                                }

                            })}
                        />
                        <label className="label">
                            {errors.review?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.review?.message}</span>}
                        </label>
                        <label className="label">
                            <span className="label-text">Ratting</span>
                        </label>
                        <input
                            type="number"
                            placeholder="Ratting 1-5"
                            className="input input-bordered bg-white w-full max-w-xs"
                            {...register("ratting", {
                                required: {
                                    value: true,
                                    message: 'Ratting is Required'
                                }

                            })}
                        />
                        <label className="label">
                            {errors.ratting?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.ratting?.message}</span>}
                        </label>

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



                        <input className='btn btn-primary w-full text-white' type="submit" value="Add Review" />

                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddAReview;