import React from "react";
import HeroSection from "../../components/HeroSection";
import ImageGallery from "./ImageGallery";
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
