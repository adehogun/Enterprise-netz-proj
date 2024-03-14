import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import ProductsList from './components/ProductsList';
import ProductDetails from './components/ProductDetails';
import Navbar from './components/Navbar';
import Hero from './components/Hero';


function App() {
  return (
    <div>
      <div>
        <nav>
           <Navbar/> 
      
        </nav>
      </div>
       <div>
<Hero/>
         <Routes>
        <Route path="/" element={<ProductsList />} />
        <Route path="/" element={<ProductDetails/>} />
        <Route path="products/:productId" element={<ProductDetails />} />
      </Routes>
       </div>
     

    </div>
 

  );
}

export default App;