import React from 'react'
import Navbar from './components/Navbar';
import Startscreen from './pages/Startscreen';
import ServicesIntro   from './pages/ServicesIntro';  
import Standout  from './pages/Standout';
import Products from './pages/Products';
import Locations from './pages/Locations';
import ContactUs from './pages/Contactus';


function App() {

  return (
    <>
      <Navbar/>
      <Startscreen/>
      <ServicesIntro/>
      <Standout/>
      <Products/>
      <Locations/>
      <ContactUs/>
    </>
  );
}

export default App;
