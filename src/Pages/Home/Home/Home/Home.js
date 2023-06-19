import React from 'react';
import Banner from '../Banner';
import OnlineBest from '../OnlineBest';
import DoctorShedule from '../DoctorShedule';
import Services from '../Services';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <OnlineBest></OnlineBest>
      <DoctorShedule></DoctorShedule>
      <Services></Services>
    </div>
  );
};

export default Home;