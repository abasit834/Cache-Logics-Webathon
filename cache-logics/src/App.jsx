import React from 'react'
import Navbar from './components/Navbar';
import ServicesIntro   from './pages/ServicesIntro';  
import Startscreen from './pages/Startscreen';

function App() {

  return (
    <>
      <Navbar/>
      <Startscreen/>
      <ServicesIntro/>
    </>
  );
}

export default App;
