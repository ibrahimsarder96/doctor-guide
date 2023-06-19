import React from 'react';
import doctor3  from '../../../assets/doctor3.png';
const DoctorShedule = () => {
  return (
    <div class="grid grid-cols-2 lg:gap-4">
  <div className='mt-72'>
    <h1 className='text-3xl font-medium text-accent'>Sick Kid? How to Deal with a</h1>
    <h2 className='text-3xl font-medium text-accent'>Child's Fever: 4 Steps</h2>
  
  </div>
  <div>
  <img className='h-4/6' src={doctor3} alt="" srcset="" />
  </div>
</div>
  );
};

export default DoctorShedule;