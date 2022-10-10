import React, { useState } from 'react';
import Banner from './banner/Banner';
import Movies from './movies';

const Home = () => {
  return (
    <div>
      <Banner/>
      <Movies/>
    </div>
  );
};

export default Home;