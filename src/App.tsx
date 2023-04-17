import React from "react";
import {Routes, Route,redirect } from 'react-router-dom';
import "./App.css";

import Navbar from "./components/Navbar";

import HomePage from "./pages/home/HomePage";
import Footer from "./components/Footer";
import Page404 from "./pages/ultils/Page404";

function App() {
  return (
    <>
      <Navbar />
      <Routes>     
        <Route path="/" element={<HomePage />} />
        <Route path="/*" element={<Page404/>} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
