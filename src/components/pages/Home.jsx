import {React, useRef} from 'react';
import '../../App.css';
import Hero from '../Hero';
import RegionalInfo from '../RegionalInfo';
import UpcomingTournaments from '../UpcomingTournaments';
import { motion } from 'framer-motion';

function Home(){
    const regionalRef = useRef();

    return (
    <motion.div
      initial={{ opacity: 0}}
      animate={{ opacity: 1}}
      transition={{
          type: "tween",
          duration: 0.5,
          ease: "easeInOut",
          delay: 0.2
      }}
    >
      <Hero scrollToRegional={() => regionalRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })}/>
      <div className="block-layout" ref={regionalRef}>
        <RegionalInfo />
        <UpcomingTournaments />
      </div>
    </motion.div>
    );
}

export default Home;