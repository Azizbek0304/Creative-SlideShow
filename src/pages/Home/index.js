import React from 'react';
import SlideShow from './components/3dSlide';

const Home = () => {
  return (
    <div className="container">
      <h1 className="text-center" style={{ paddingTop: '30%' }}>
        Home
      </h1>
      <SlideShow />
    </div>
  );
};
export default Home;
