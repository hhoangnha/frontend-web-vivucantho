import React from "react";
import {Routes, Route} from 'react-router-dom';
import "./App.css";

import Navbar from "./components/Navbar";

import HomePage from "./pages/home/HomePage";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>     
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
