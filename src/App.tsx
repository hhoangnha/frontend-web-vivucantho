import React, { useEffect } from 'react';
import { Routes, Route, redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import './App.css';

import Navbar from './components/Navbar';

import HomePage from './pages/home/HomePage';
import Footer from './components/Footer';
import Page404 from './pages/ultils/Page404';
import AboutPage from './pages/about/AboutPage';
import store from './redux/store';
import SearchPage from './pages/search/SearchPage';
import BlogPage from './pages/blog/BlogPage';

// import Button from './components/button/Button';

function App() {
  return (
    <>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/*" element={<Page404 />} />
        </Routes>
        <Footer />
      </Provider>
    </>
  );
}

export default App;
