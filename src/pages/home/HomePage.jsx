import React, { useState } from 'react';
import HeroSection from '../../components/HeroSection';
import ImageGallery from './ImageGallery';
import TabMenu from '../../components/TabMenu';
import Navbar from '../../components/Navbar';

function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <TabMenu />
      <ImageGallery />
    </>
  );
}

export default React.memo(HomePage);
