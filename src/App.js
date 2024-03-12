import React from 'react';
import './App.css';
import ProductListSlice from './features/product-list/ProductListSlice';
import ProductList from './features/product-list/ProductList';

function App() {
  return (
    <div className="App">
      <ProductList/>
    </div>
  );
}

export default App;
