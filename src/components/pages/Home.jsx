import {React, useRef} from 'react';
import '../../App.css';
import Hero from '../Hero';
import RegionalInfo from '../RegionalInfo';
import UpcomingTournaments from '../UpcomingTournaments';

function Home(){
    const regionalRef = useRef();

    return (
    <>
      <Hero scrollToRegional={() => regionalRef.current?.scrollIntoView({ behavior: 'smooth', alignToTop: true })}/>
      <div className="block-layout" ref={regionalRef}>
        <RegionalInfo />
        <UpcomingTournaments />
      </div>
    </>
    );
}

export default Home;