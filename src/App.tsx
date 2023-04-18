import React from 'react';
import { Routes, Route, redirect } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';

import HomePage from './pages/home/HomePage';
import Footer from './components/Footer';
import Page404 from './pages/ultils/Page404';
import AboutPage from './pages/about/AboutPage';

// import Button from './components/button/Button';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/*" element={<Page404 />} />
      </Routes>
      <Footer />
      {/* <Button title={'ádasdasdasd'} maunen="yellow" />
      <Button title={'1'} maunen={'blue'} /> */}
    </>
  );
}

export default App;
