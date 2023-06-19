import React from 'react';
import Banner from '../Banner';
import OnlineBest from '../OnlineBest';
import DoctorShedule from '../DoctorShedule';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <OnlineBest></OnlineBest>
      <DoctorShedule></DoctorShedule>
    </div>
  );
};

export default Home;