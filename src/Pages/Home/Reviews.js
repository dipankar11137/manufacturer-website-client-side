import React, { useEffect, useState } from 'react';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`https://safe-hamlet-14439.herokuapp.com/reviews`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])


    return (
        <div className='my-5'>
            <h1 className='text-center text-3xl uppercase font-bold text-blue-900'>show Reviews</h1>
            <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 m-10  p-3'>
                {
                    reviews.map(review => <>
                        <div class="card bg-purple-800 text-white shadow-xl">
                            <div class="card-body">
                                <h2 class="card-title">{review?.review}</h2>
                                <p>Ratting : {review?.ratting}</p>
                                <p>Review Sender Name  : {review?.username}</p>

                            </div>
                        </div>

                    </>)
                }
            </div>

        </div>
    );
};

export default Reviews;