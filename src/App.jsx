import React from 'react';
import Navbar  from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './components/pages/Home';
import Events from './components/pages/Events';
import About from './components/pages/About';
import Archive from './components/pages/Archive';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/events' element={<Events/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/archive' element={<Archive/>} />
      </Routes>
    </Router>
  );
}

export default App;

