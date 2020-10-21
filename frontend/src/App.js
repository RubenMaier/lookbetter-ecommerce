import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import Header from './layout/Header'
import Aside from './layout/Aside'
import Main from './layout/Main'
import Footer from './layout/Footer'
import './app.css'

export default () => {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <Header />
        <Aside />
        <Main />
        <Footer />
      </div>
    </BrowserRouter>
  );
}