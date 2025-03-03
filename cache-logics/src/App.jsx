import React from 'react'
import Navbar from './components/Navbar';
import ServicesIntro   from './pages/ServicesIntro';  
import Standout  from './pages/Standout';
import Products from './pages/Products';

function App() {

  return (
    <>
      <Navbar/>
      <ServicesIntro/>
      <Standout />
      < Products  />
    </>
  );
}

export default App;
