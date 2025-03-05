import React from 'react'
import Navbar from './components/Navbar';
import Startscreen from './pages/Startscreen';
import ServicesIntro   from './pages/ServicesIntro';  
import Standout  from './pages/Standout';
import Products from './pages/Products';
import Locations from './pages/Locations';
import ContactUs from './pages/Contactus';
import Footer from './pages/footer';
import Team from './pages/Team';

function App() {

  return (
    <>
      {/* <Navbar/>
      <Startscreen/>
      <ServicesIntro/>
      <Standout/>
      <Products/> */}
      <Team/>
      <Locations/>
      <ContactUs/>
    </>
  );
}

export default App;
