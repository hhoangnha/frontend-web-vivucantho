import React from 'react';
import TabMenu from '../../components/TabMenu';
import SearchNavbar from './SearchNavbar';
import SearchImageGallery from './SearchImageGallery';

export default function SearchPage() {
  return (
    <>
      <SearchNavbar />
      <TabMenu />
      <SearchImageGallery />
    </>
  );
}
