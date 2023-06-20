import React from 'react';
import expert1 from '../../../assets/expert2.jpg';
const Events = () => {
  return (
    <div className='my-10'>
    <h1 className='text-center text-4xl font-bold text-accent'>Upcoming Events</h1>
      <h2 className='text-center text-xl  text-accent'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum velit consectetur corporis? Modi, </h2>
      <h2 className='text-center text-xl  text-accent'>amet consectetur adipisicing elit. Earum velit consectetur </h2>
      <div>
      <div className="card lg:card-side bg-base-100 shadow-xl">
  <figure><img src={expert1} alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title">New album is released!</h2>
    <p>Click the button to listen on Spotiwhy app.</p>
  </div>
</div>
<div className="card lg:card-side bg-base-100 shadow-xl mt-8">
  <div className="card-body">
    <h2 className="card-title">New album is released!</h2>
    <p>Click the button to listen on Spotiwhy app.</p>
  </div>
  <figure><img src={expert1} alt="Album"/></figure>
</div>
      </div>
    </div>
  );
};

export default Events;