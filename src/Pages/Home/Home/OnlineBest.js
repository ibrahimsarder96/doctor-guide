import React from 'react';
import doctor2  from '../../../assets/doctor2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcaseMedical } from '@fortawesome/free-solid-svg-icons';
const OnlineBest = () => {
  return (
    <div class="grid grid-cols-2 lg:gap-4">
  <div>
  <img className='h-4/6' src={doctor2} alt="" srcset="" />
  </div>
  <div className='mt-72'>
    <h1 className='text-3xl font-medium text-accent'>Sick Kid? How to Deal with a</h1>
    <h2 className='text-3xl font-medium text-accent'>Child's Fever: 4 Steps</h2>
    <p className='text-accent mt-16'>
    <FontAwesomeIcon className='pr-2 text-primary h-5' icon={faBriefcaseMedical} />
      Cras sit sed nec a nunc</p>
    <p className='text-accent my-4'>
    <FontAwesomeIcon className='pr-2 text-primary h-5' icon={faBriefcaseMedical} />
      Tempor mauris mauis in</p>
    <p className='text-accent my-4'>
    <FontAwesomeIcon className='pr-2 text-primary h-5' icon={faBriefcaseMedical} />
      Nibh turpis praesent pretium</p>
    <p className='text-accent my-4'>
    <FontAwesomeIcon className='pr-2 text-primary h-5' icon={faBriefcaseMedical} />
      Cras sit sed nec a nunc</p>
  </div>
</div>
  );
};

export default OnlineBest;