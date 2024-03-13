import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import ProductsList from './components/ProductsList';
import ProductDetails from './components/ProductDetails';


function App() {
  return (
    
    <div>
      <nav>
        
      </nav>
<h1  className="text-3xl font-bold underline">Hello World</h1>
      <Routes>
        <Route path="/" element={<ProductsList />} />
        <Route path="/" element={<ProductDetails/>} />
        <Route path="products/:productId" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;