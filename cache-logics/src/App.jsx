import React from "react";
import {BrowserRouter as Router,Routes,Route,Navigate } from 'react-router-dom';
import LandingPage  from "./LandingPage";


const App =()=>{
    return (
    <Router>

        <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/*" element={<Navigate to="/"/>} />
        </Routes>
        
    </Router>
    );

}

export default App;