import React from "react";
import {Routes, Route} from 'react-router-dom';
import "./App.css";

import Navbar from "./components/Navbar";

import HomePage from "./pages/home/HomePage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>     
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
