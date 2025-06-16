import {React, useContext} from 'react';
import './UpcomingTournaments.css'
import { UpcomingTournamentDataContext } from '../context/UpcomingTournamentDataContext';
import MapView from './MapView'

function UpcomingTournaments(){

    const {tournaments} = useContext(UpcomingTournamentDataContext);

    if (!tournaments) {
        return <div>Loading map...</div>;
    }

    return(
        <div className="block-section">
            <h1 className="upcoming-tournaments-header">Upcoming Tournaments</h1>\
            <MapView tournaments={tournaments}/>
        </div>
    )
}

export default UpcomingTournaments;