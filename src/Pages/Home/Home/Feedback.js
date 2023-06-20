import React from 'react';
import Feedbacks from './Feedbacks';
import banner1 from '../../../assets/doctor1.png';
import banner2 from '../../../assets/doctor1.png';
import banner3 from '../../../assets/doctor1.png';
const Feedback = () => {
  const bannerData = [
    {
      image: banner1,
      prev: 3,
      id: 1,
      next: 2,
    },
    {
      image: banner2,
      prev: 1,
      id: 2,
      next: 3,
    },
    {
      image: banner3,
      prev: 2,
      id: 3,
      next: 1,
    },
  ]
  return (
    <div className="carousel w-full py-10">
    {
      bannerData.map(slide => <Feedbacks
      key={slide.id}
      slider={slide}
      ></Feedbacks>)
      }
  </div>
  );
};

export default Feedback;