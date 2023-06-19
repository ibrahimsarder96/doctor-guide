import React from 'react';
import doctor1  from '../../../assets/doctor1.png';
import doctor2  from '../../../assets/doctor2.png';
// import bg from '../../../assets/dot.jpg';
// style={{
//   background: `url(${bg})`,

// }}
const Banner = () => {
  return (
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4 my-16">
    <div  >
      <h1 className='text-accent text-5xl font-bold mt-24'>Find The Care You Need</h1>
      <p className='text-accent my-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur culpa omnis repellendus nulla, odit voluptatem? Dolore magnam, excepturi sed aperiam at ipsa blanditiis veniam expedita earum ad, quo dolores magni.</p>
      <button className='btn btn-primary text-white'>Make Appointment</button>
    </div>
    <div>
      <img src={doctor1} alt="" srcset="" />
    </div>
    <div>
    <img src={doctor2} alt="" srcset="" />
    </div>
  </div>
  );
};

export default Banner;