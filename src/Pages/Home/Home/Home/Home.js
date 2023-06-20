import React from 'react';
import Banner from '../Banner';
import OnlineBest from '../OnlineBest';
import DoctorShedule from '../DoctorShedule';
import Services from '../Services';
import Award from '../Award';
import Experts from '../Experts';
import Feedbacks from '../Feedbacks';
import Feedback from '../Feedback';
import Events from '../Events';

const Home = () => {
  return (
      <div className='max-w-[1440px] mx-auto'>
      <Banner></Banner>
      <OnlineBest></OnlineBest>
      <DoctorShedule></DoctorShedule>
      <Services></Services>
      <Award></Award>
      <Experts></Experts>
      <Feedback></Feedback>
      <Events></Events>
      </div>
  );
};

export default Home;