import {React, useState, useEffect} from 'react';
import Navbar  from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './components/pages/Home';
import Events from './components/pages/Events';
import About from './components/pages/About';
import Archive from './components/pages/Archive';
import { UpcomingTournamentDataProvider } from './context/UpcomingTournamentDataContext';
import { LastNightsTournamentResultsProvider } from './context/LastNightsTournamentResultsContext';
import 'leaflet/dist/leaflet.css';
import { AnimatePresence } from 'framer-motion';

function App() {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      const checkScreenSize = () => {
        setIsMobile(window.innerWidth <= 768);
      };

      checkScreenSize();
      window.addEventListener('resize', checkScreenSize);

      return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    if (isMobile) {
      return (
        <div className="mobile-blocker">
          <div className="mobile-background"></div>
          <div className="message">
            <h1>🚧 Mobile Version in Progress</h1>
            <p>Please visit this site on a desktop for the best experience.</p>
          </div>
        </div>
      );
    }

    return (
      <UpcomingTournamentDataProvider>
        <LastNightsTournamentResultsProvider>
          <Router>
            <Navbar />
            <AnimatePresence mode="wait">
              <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/events' element={<Events/>} />
                <Route path='/about' element={<About/>} />
                <Route path='/archive' element={<Archive/>} />
              </Routes>
            </AnimatePresence>
          </Router>
        </LastNightsTournamentResultsProvider>
      </UpcomingTournamentDataProvider>
    );
}

export default App;

