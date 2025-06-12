import React from 'react';
import '../../App.css';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

const res = await fetch('/.netlify/functions/tournamentsNearby')
const eventData = await res.json();
console.log(eventData);

function Events(){
    return (
        <div className="calendar-wrapper">
            <h1> Socal Melee Event Calendar </h1>
            <FullCalendar
                plugins={[dayGridPlugin]}
                initialView="dayGridMonth"
                headerToolbar={false}
                events={eventData}
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