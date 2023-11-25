import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './index.css';
import Header from './components/Header';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Footer from './components/Footer';


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <Router>
    <Header />
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
    </Routes>
    <Footer />
  </Router>
);