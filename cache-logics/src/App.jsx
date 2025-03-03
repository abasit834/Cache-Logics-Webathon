import React from 'react'
import Navbar from './components/Navbar';
import ServicesIntro   from './pages/ServicesIntro';  
import Standout  from './pages/Standout';

function App() {

  return (
    <>
      <Navbar/>
      <ServicesIntro/>
      <Standout />
    </>
  );
}

export default App;
