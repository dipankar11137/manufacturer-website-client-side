import React from 'react';

const RatingRate = () => {
    return (
        <div className=' flex justify-center mb-14'>
            <div className='grid grid-cols-3 gap-16'>
                <div class="stat">
                    <div class="stat-title">
                        <div class="avatar placeholder">
                            <div class="bg-neutral-focus text-neutral-content rounded-full w-24">
                                <img src="https://i.ibb.co/0G7jqzs/imgbin-flags-of-the-world-national-flag-flag-of-the-united-states-italian-flag-international-flags-i.jpg" alt='' />
                            </div>
                        </div>
                    </div>
                    <div class="stat-value">86</div>
                    <div class="stat-desc">Countries</div>
                </div>
                <div>
                    <div class="stat">
                        <div class="stat-title">
                            <div class="avatar">
                                <div class="w-24 mask mask-hexagon">
                                    <img src="https://i.ibb.co/WHL27hN/istockphoto-1075599562-612x612.jpg" alt='' />
                                </div>
                            </div>
                        </div>
                        <div class="stat-value">20+</div>
                        <div class="stat-desc">Complete Projects</div>
                    </div>
                </div>
                <div>
                    <div class="stat">
                        <div class="stat-title">
                            <div class="avatar placeholder">
                                <div class="bg-neutral-focus text-neutral-content rounded-full w-24">
                                    <img src="https://i.ibb.co/VNpNmpZ/client.png" alt="" />
                                </div>
                            </div>
                        </div>
                        <div class="stat-value">500+</div>
                        <div class="stat-desc">Happy Clients</div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default RatingRate;