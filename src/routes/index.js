import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//Components
import NavBar from '../components/NavBar/NavBar.jsx';
import Home from '../pages/Home/Home.js';
import PastLaunches from '../pages/PastLaunches/PastLaunches.js';
import Rocket from '../pages/Rocket/Rocket.js';

// import "../styles/index.css"

const Routing = () => (
    <Router>
        <div className="general">
            <NavBar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/launches" element={<PastLaunches />} />
                <Route exact path="/rocket" element={<Rocket />} />
            </Routes>
        </div>
    </Router>
);

export default Routing;