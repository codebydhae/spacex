import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//Components
import NavBar from '../components/NavBar.jsx';
import Home from '../components/Home.jsx';
import Matrix from '../components/Matrix.jsx';
import Alchemy from '../components/Alchemy.jsx';

import "../styles/index.css"

const Routing = () => (
    <Router>
        <div className="general">
            <NavBar />
            {/* <Home /> */}
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/Matrix" element={<Matrix />} />
                <Route exact path="/Alchemy" element={<Alchemy />} />
            </Routes>
        </div>
    </Router>
);

export default Routing;