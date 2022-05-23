import React from 'react';
import Footer from './Footer';

const Blogs = () => {
    return (
        <div>
            <div className='m-10'>
                <h1 className='text-5xl font-bold text-center text-amber-600'>Answer the Question </h1>
                <div className='shadow-lg rounded-3xl p-3 mt-5'>
                    <h1 className='font-bold text-3xl text-sky-900'>14.1. How will you improve the performance of a React Application?</h1>
                    <p className='mt-3 text-xl'><span className='font-bold'>Answer : </span>Optimizing application performance is key for developers who are conscious of keeping the user experience in an app and keeping them positive.
                        In this guide, we will discuss five important ways to optimize the performance of a responsive application, including pre-optimization strategies. <br /> These include: <br />
                        <p>1. Keep the condition of the material localized where necessary.</p>
                        <p>2. Remember feedback elements to prevent unnecessary re-rendering.</p>
                        <p>3. Code-segmentation in response using dynamic import ()</p>
                        <p>4. Window or list virtualization in response.</p>
                        <p>5. Lazy loading image in response</p>
                    </p>
                </div>
                <div className='shadow-lg rounded-3xl p-3 mt-5'>
                    <h1 className='font-bold text-3xl text-sky-900'>14.2. What are the different ways to manage a state in a React application?</h1>
                    <p className='mt-3 text-xl'><span className='font-bold'>Answer : </span>There are four main types of state you need to properly manage in the React apps:
                        <p>1. Local state. <br />
                            Local state is data we manage in one or another component.Local state is most often managed in React using the useState hook.
                        </p>
                        <p>2. Global state. <br />
                            Global state is data we manage across multiple components.Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.
                        </p>
                        <p>3. Server state. <br />
                            Data that comes from an external server that must be integrated with our UI state. Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state.
                        </p>
                        <p>4. URL state. <br />
                            Data that exists on our URLs, including the pathname and query parameters.URL state is often missing as a category of state, but it is an important one.
                            In many cases, a lot of major parts of our application rely upon accessing URL state. Try to imagine building a blog without being able to fetch a post based off of its slug or id that is located in the URL!
                        </p>
                    </p>
                </div>
                <div className='shadow-lg rounded-3xl p-3 mt-5'>
                    <h1 className='font-bold text-3xl text-sky-900'>14.3. How does prototypical inheritance work?</h1>
                    <p className='mt-3 text-xl'><span className='font-bold'>Answer : </span>Prototypical inheritance is a feature of JavaScript that is used to add methods and features to objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, to get and set an [[prototype]] of an object, we use the object. get Prototype Of and object.JavaScript is a prototype-based, Object Oriented programming language. After the ES6 updates, JavaScript allowed for “prototypal inheritance”, meaning that objects and methods can be shared, extended, and copied. Sharing amid objects makes for easy inheritance of structure (data fields), behavior (functions / methods), and state (data values). JavaScript is the most common of the prototype-capable languages, and its capabilities are relatively unique. When used appropriately, prototypical inheritance in JavaScript is a powerful tool that can save hours of coding.</p>
                </div>
                <div className='shadow-lg rounded-3xl p-3 mt-5'>
                    <h1 className='font-bold text-3xl text-sky-900'>14.4. </h1>
                    <p className='mt-3 text-xl'><span className='font-bold'>Answer : </span></p>
                </div>
                <div className='shadow-lg rounded-3xl p-3 mt-5'>
                    <h1 className='font-bold text-3xl text-sky-900'>14.5. </h1>
                    <p className='mt-3 text-xl'><span className='font-bold'>Answer : </span></p>
                </div>
                <div className='shadow-lg rounded-3xl p-3 mt-5'>
                    <h1 className='font-bold text-3xl text-sky-900'>14.6. </h1>
                    <p className='mt-3 text-xl'><span className='font-bold'>Answer : </span></p>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Blogs;