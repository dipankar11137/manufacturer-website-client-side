import React from 'react';

import img1 from '../../Images/Project/e.PNG'
import img2 from '../../Images/Project/h.PNG'
import img3 from '../../Images/Project/g.PNG'

const MyPortfolio = () => {
    return (
        <div className='mb-10'>
            <div className='flex justify-center'>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/HxgkZyM/dipu.png" alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">
                            Dipankar Halder

                        </h2>
                        <p>Email : dipankar.halder117@gmail.com</p>
                        <p>Portfolio Link : https://cosmic-toffee-4e7347.netlify.app/</p>
                        <p>Github link : https://github.com/dipankar11137</p>
                        <p>Phone : O1725798051</p>

                    </div>
                </div>
            </div>
            <div>
                <div class="overflow-x-auto my-5">
                    <table class="table table-zebra w-full">

                        <thead>
                            <tr>
                                <th></th>
                                <th>Institution</th>
                                <th></th>
                                <th>Subject</th>
                                <th>Passing Year</th>
                                <th>Result (GPA/CGPA)</th>
                            </tr>
                        </thead>
                        <tbody>

                            <tr>
                                <th>1</th>
                                <td>Daffodil International University</td>
                                <td>Graduate</td>
                                <td>Bsc in CSE</td>
                                <td>2022</td>
                                <td>3.45</td>
                            </tr>
                            <tr>
                                <th>2</th>
                                <td>Govt Hatem Ali Clooage, Barishal</td>
                                <td>HSC</td>
                                <td>Science</td>
                                <td>2017</td>
                                <td>4.25</td>
                            </tr>
                            <tr>
                                <th>3</th>
                                <td>Kodal Dhoa Secondary school, Barishal</td>
                                <td>SSC</td>
                                <td>Science</td>
                                <td>2015</td>
                                <td>5.00</td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
            <div>
                <h1 className='my-5 text-3xl text-purple-700 uppercase font-bold text-center'>Soft Skill</h1>
                <div class="overflow-x-auto my-5">
                    <table class="table table-zebra w-full">

                        <thead>
                            <tr>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Html</td>
                                <td>CSS</td>
                                <td>Bootstrap</td>
                                <td>Tailwind CSS</td>
                                <td>JavaScript</td>

                            </tr>
                            <tr><td>Node js</td>
                                <td>Database</td>
                                <td>Mongo DB</td>
                                <td>React js</td>
                                <td>Daisy UI</td>
                            </tr>
                            <tr>
                                <td>C</td>
                                <td>C++</td>
                                <td>JAVA</td>
                                <td>Firebase</td>
                                <td>MS WORD</td>
                            </tr>
                            <tr>
                                <td>MS EXCEL</td>
                                <td>MS POWER POINT</td>
                                <td>Machine Learning</td>
                                <td>Artificial Intelligence</td>
                                <td>Assembly language</td>
                            </tr>


                        </tbody>
                    </table>
                </div>
            </div>
            <div>
                <h1 className='my-5 text-3xl text-purple-700 uppercase font-bold text-center'>Live Web side Link</h1>
                <div className=' flex justify-center gap-5'>
                    <button className='btn btn-primary'><a className='link link-hover' target="_blank" href="https://whimsical-starburst-4da913.netlify.app/">Watch Store</a></button>
                    <button className='btn btn-primary'><a className='link link-hover' target="_blank" href="https://inspiring-frangollo-44427b.netlify.app/">Better Buy</a></button>
                    <button className='btn btn-primary'><a className='link link-hover' target="_blank" href="https://friendly-liskov-3700bc.netlify.app/">Phone </a></button>

                </div>
            </div>
            <div>
                <h1 className='my-5 pt-9 text-3xl text-purple-700 uppercase font-bold text-center'>Project Images And Description</h1>

                <div className='flex justify-center gap-4'>
                    <div class="card w-96 bg-base-100 shadow-xl">
                        <figure><img src={img2} alt="Shoes" /></figure>
                        <div class="card-body">
                            <h2 class="card-title">Watch stor</h2>
                            <p>It is very beautiful service . Its make us easy and comfort</p>

                        </div>
                    </div>
                    <div class="card w-96 bg-base-100 shadow-xl">
                        <figure><img src={img3} alt="Shoes" /></figure>
                        <div class="card-body">
                            <h2 class="card-title">Butter Buy</h2>
                            <p>It is very beautiful service . Its make us easy and comfort</p>

                        </div>
                    </div>
                    <div class="card w-96 bg-base-100 shadow-xl">
                        <figure><img src={img1} alt="Shoes" /></figure>
                        <div class="card-body">
                            <h2 class="card-title">Phone stor</h2>
                            <p>It is very beautiful service . Its make us easy and comfort</p>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MyPortfolio;