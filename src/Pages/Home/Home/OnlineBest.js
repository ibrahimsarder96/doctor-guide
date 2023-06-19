import React from 'react';
import doctor2  from '../../../assets/doctor2.png';
const OnlineBest = () => {
  return (
    <div class="grid grid-cols-2 lg:gap-4">
  <div>
  <img className='h-4/6' src={doctor2} alt="" srcset="" />
  </div>
  <div className='mt-72'>
    <h1 className='text-3xl font-medium text-accent'>Sick Kid? How to Deal with a</h1>
    <h2 className='text-3xl font-medium text-accent'>Child's Fever: 4 Steps</h2>
    <p className='text-accent mt-16'>Cras sit sed nec a nunc</p>
    <p className='text-accent my-4'>Tempor mauris mauis in</p>
    <p className='text-accent my-4'>Nibh turpis praesent pretium</p>
    <p className='text-accent my-4'>Cras sit sed nec a nunc</p>
  </div>
</div>
  );
};

export default OnlineBest;