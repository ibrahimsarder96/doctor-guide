import React from 'react';
import doctor3  from '../../../assets/doctor3.png';
const DoctorShedule = () => {
  return (
    <div class="grid grid-cols-2 gap-12 relative">
  <div className='mt-72'>
    <h1 className='text-3xl font-medium text-accent'>Sick Kid? How to Deal with a</h1>
    <h2 className='text-3xl font-medium text-accent'>Child's Fever: 4 Steps</h2>
    <p className='text-accent mt-16'>Cras sit sed nec a nunc</p>
    <p className='text-accent my-4'>Tempor mauris mauis in</p>
    <p className='text-accent my-4'>Nibh turpis praesent pretium</p>
    <p className='text-accent my-4'>Cras sit sed nec a nunc</p>
  </div>
  <div>
    <div className="indicator-item indicator-top absolute  indicator-start badge pt-16 text-accent border-none badge-white">
    <h1>top+start</h1>
    </div>
  <img className='h-4/6' src={doctor3} alt="" srcset="" />
  </div>
</div>
  );
};

export default DoctorShedule;