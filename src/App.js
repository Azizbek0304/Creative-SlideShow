import React from 'react';
import SlideShow from './components/3dSlide';
import Navbar from './components/Navbar';
import './style.scss';

export default function App() {
  return (
    <div>
      <Navbar />
      <SlideShow />
    </div>
  );
}
