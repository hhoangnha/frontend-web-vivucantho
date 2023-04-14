import React from "react";
import HeroSection from "../../components/HeroSection";
import ImageGallery from "../../components/ImageGallery";
import TabMenu from "../../components/TabMenu";
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TabMenu />
      <ImageGallery />
    </>
  );
}