import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Product from './components/Product/Product';
import Supplement from './components/Supplement/Supplement';
import Contact from './components/Contact/Contact'; 

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Product /> 
      <Supplement />
      <Contact />
    </div>
  );
}

export default App;