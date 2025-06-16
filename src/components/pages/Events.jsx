import {React, useContext} from 'react';
import '../../App.css';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import { UpcomingTournamentDataContext } from '../../context/UpcomingTournamentDataContext';

function Events(){
    const tournaments = useContext(UpcomingTournamentDataContext);
    console.log(tournaments);

    return (
        <div className="calendar-wrapper">
            <h1> Socal Melee Event Calendar </h1>
            <FullCalendar
                plugins={[dayGridPlugin]}
                initialView="dayGridMonth"
                headerToolbar={false}
                events={tournaments}
                eventContent={renderEventContent}
                eventClick={handleEventClick}
            />
        </div>
    )
}

function renderEventContent(eventInfo) {
  return (
    <div>
      Test
    </div>
  );
}

function handleEventClick(info) {
  alert(`test`);
}

export default Events;