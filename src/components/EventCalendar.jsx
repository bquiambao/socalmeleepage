import {React, useContext, useState} from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import { UpcomingTournamentDataContext } from '../context/UpcomingTournamentDataContext';
import './EventCalendar.css'
import tournamentData from '../data/tournaments.json';
import {AnimatePresence, motion} from 'framer-motion';

function EventCalendar({dataType}) {
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [popoverPosition, setPopoverPosition] = useState({ top: 0, left: 0 });
    const {tournaments} = useContext(UpcomingTournamentDataContext);
    const [selectedRegions, setSelectedRegions] = useState([]);

    if (dataType == 'upcoming') {

        if (!tournaments) {
            return <div>Loading calendar...</div>;
        }

        const calendarEvents = tournaments.map(t => ({
            title: t.name,
            start: new Date(t.startAt * 1000).toISOString(),
            extendedProps: {
                address: t.venueAddress,
                logo: t.images?.[0]?.url,
                tournamentUrl: t.url,
                stream: t.streams?.[0]?.streamName || null
            }
        }));

        function renderEventContent(eventInfo) {
            const { extendedProps } = eventInfo.event;

            return (
                <div className='calendar-event-logo-container'>
                    <img src={extendedProps.logo} className="calendar-event-logo"></img>
                </div>
            );
        }

        function handleEventClick(eventInfo) {
            const { pageX, pageY } = eventInfo.jsEvent;
            const { title, start, extendedProps } = eventInfo.event;
            setSelectedEvent({
                title: title,
                address: extendedProps.address,
                dateTime: new Date(start).toLocaleString(),
                tournamentUrl: extendedProps.tournamentUrl,
                stream: extendedProps.stream
            });
            if (window.innerWidth < 768) {
                setPopoverPosition({
                    top: pageY,
                    left: 10
                });
            }
            else {
                setPopoverPosition({ top: pageY, left: pageX });
            }
        }

        return (
            <AnimatePresence mode="wait">
                <motion.div
                    key="upcomingCalendar"
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 100, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                    <div className="calendar-wrapper">
                            <div className="calendar-header">
                                <h1> SoCal Melee Event Calendar </h1>
                                <h2> This is a calendar of upcoming events with published start.gg pages in SoCal.</h2>
                            </div>
                            <div className="calendar-scroll-container">
                                <FullCalendar
                                    plugins={[dayGridPlugin]}
                                    initialView="multiWeek"
                                    views={{
                                        multiWeek: {
                                            type: "dayGrid",
                                            duration: { weeks: 5 }
                                        }
                                    }}
                                    contentHeight="auto"
                                    initialDate={new Date()}
                                    headerToolbar={false}
                                    events={calendarEvents}
                                    eventContent={renderEventContent}
                                    eventClick={handleEventClick}
                                />
                            </div>
                            {selectedEvent && (
                                <div
                                    className="popover"
                                    style={{
                                        top: `${popoverPosition.top}px`,
                                        left: `${popoverPosition.left}px`,
                                        position: 'absolute',
                                        zIndex: 1000,
                                    }}
                                >
                                    <button className="close-btn" onClick={() => setSelectedEvent(null)}>&times;</button>
                                    <h2>{selectedEvent.title}</h2>
                                    <p>Venue Address: {selectedEvent.address}</p>
                                    <p>Date and Time: {selectedEvent.dateTime}</p>
                                    <a href={`https://start.gg/${selectedEvent.tournamentUrl}`} target="_blank" rel="noopener noreferrer">Link to start.gg page</a> <br/>
                                    {selectedEvent.stream ? (
                                    <a href={`https://twitch.tv/${selectedEvent.stream}`} target="_blank" rel="noopener noreferrer">
                                        Watch Stream
                                    </a>
                                    ) : (
                                    <p>No stream available</p>
                                    )}
                                </div>
                            )}
                    </div>
                </motion.div>
            </AnimatePresence>
        )
    }
    else {

        const dayToNumber = {
            Sunday: 0,
            Monday: 1,
            Tuesday: 2,
            Wednesday: 3,
            Thursday: 4,
            Friday: 5,
            Saturday: 6
        };

        const calendarEvents = tournamentData
            .filter(t => t.frequency != 'Monthly')
            .map(t => ({
                title: t.name,
                daysOfWeek: [dayToNumber[t.day]],
                startTime: convertTo24Hour(t.doorsOpen),
                extendedProps: {
                    address: t.address,
                    doorsOpen: t.doorsOpen,
                    region: t.region,
                    frequency: t.frequency,
                    tournamentStartTime: t.startTime,
                    logo: t.logo
                }
        }));

        const recurringMonthlies = tournamentData
            .filter(t => t.frequency == 'Monthly' &&
                 (selectedRegions.length === 0 || selectedRegions.includes(t.region)))
            .map(t => ({
                title: t.name,
                address: t.address,
                doorsOpen: t.doorsOpen,
                region: t.region,
                tournamentStartTime: t.startTime,
                logo: t.logo,
                note: t.note
        }));

        function convertTo24Hour(timeStr) {
            const [time, modifier] = timeStr.split(' ');
            let [hours, minutes] = time.split(':');
            if (modifier === 'PM' && hours !== '12') hours = String(Number(hours) + 12);
            if (modifier === 'AM' && hours === '12') hours = '00';
            return `${hours}:${minutes}`;
        }

        function renderEventContent(eventInfo) {
            const { extendedProps } = eventInfo.event;

            return (
                <div className='calendar-event-logo-container'>
                    <img src={`/images/tournamentlogos/${extendedProps.logo}`} className="calendar-event-logo"></img>
                </div>
            );
        }

        function handleEventClick(eventInfo) {
            const { pageX, pageY } = eventInfo.jsEvent;
            const { title, extendedProps } = eventInfo.event;
            setSelectedEvent({
                title: title,
                address: extendedProps.address,
                doorsOpen: extendedProps.doorsOpen,
                tournamentStartTime: extendedProps.tournamentStartTime,
                region: extendedProps.region,
                frequency: extendedProps.frequency,
            });
            if (window.innerWidth < 768) {
                setPopoverPosition({
                    top: pageY,
                    left: 10
                });
            }
            else {
                setPopoverPosition({ top: pageY, left: pageX });
            }
        }

        function handleNonCalendarEventClick(event, t) {
            setSelectedEvent(t);
            if (window.innerWidth < 768) {
                setPopoverPosition({
                    top: event.pageY,
                    left: 10
                });
            }
            else  {
                setPopoverPosition({ top: event.pageY, left: event.pageX });
            }
        }

        const handleRegionChange = (region) => {
            setSelectedRegions((prev) =>
                prev.includes(region) ? prev.filter((r) => r !== region) : [...prev, region]
            );
        };

        return (
            <AnimatePresence mode="wait">
                <motion.div
                    key="generalCalendar"
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -100, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                    <div className="general-calendar-wrapper">
                        <div className="calendar-header">
                            <h1> SoCal Melee Event Calendar </h1>
                            <h2> This is a calendar of known events in SoCal. Contact cliché if you would like your event to show up here!</h2>
                            <h3> Disclaimer: This calendar doesn't guarantee that these events are happening on these dates. Please consult the appropriate regional discords or the Upcoming calendar to verify if an event is happening. </h3>
                        </div>
                        <div className="event-filters">
                            Filter by Region:
                            <div className="filter-options">
                                <label>
                                    <input
                                        type="checkbox"
                                        value="Los Angeles"
                                        checked={selectedRegions.includes("Los Angeles")}
                                        onChange={() => handleRegionChange("Los Angeles")}
                                    />
                                    Los Angeles
                                </label>
                                <label>
                                    <input
                                        type="checkbox"
                                        value="San Diego"
                                        checked={selectedRegions.includes("San Diego")}
                                        onChange={() => handleRegionChange("San Diego")}
                                    />
                                    San Diego
                                </label>
                                <label>
                                    <input
                                        type="checkbox"
                                        value="Orange County"
                                        checked={selectedRegions.includes("Orange County")}
                                        onChange={() => handleRegionChange("Orange County")}
                                    />
                                    Orange County
                                </label>
                                <label>
                                    <input
                                        type="checkbox"
                                        value="Inland Empire"
                                        checked={selectedRegions.includes("Inland Empire")}
                                        onChange={() => handleRegionChange("Inland Empire")}
                                    />
                                    Inland Empire
                                </label>
                                <label>
                                    <input
                                        type="checkbox"
                                        value="805"
                                        checked={selectedRegions.includes("805")}
                                        onChange={() => handleRegionChange("805")}
                                    />
                                    805
                                </label>
                                <label>
                                    <input
                                        type="checkbox"
                                        value="Kern County"
                                        checked={selectedRegions.includes("Kern County")}
                                        onChange={() => handleRegionChange("Kern County")}
                                    />
                                    Kern County
                                </label>
                            </div>
                        </div>
                        <div className='calendar-and-recurring-monthlies'>
                            <div className="calendar-scroll-container">
                                <FullCalendar
                                    plugins={[dayGridPlugin]}
                                    initialView="multiWeek"
                                    views={{
                                        multiWeek: {
                                            type: "dayGrid",
                                            duration: { weeks: 5 }
                                        }
                                    }}
                                    contentHeight="auto"
                                    initialDate={new Date()}
                                    headerToolbar={false}
                                    key={selectedRegions.join(",")}
                                    events={calendarEvents}
                                    eventContent={renderEventContent}
                                    eventClick={handleEventClick}
                                    eventDidMount={(info) => {
                                        const { region, frequency } = info.event.extendedProps;

                                        const regionMatch =
                                            selectedRegions.length === 0 || selectedRegions.includes(region);

                                        if (regionMatch) {
                                            info.el.style.setProperty('display', 'block', 'important');
                                        } else {
                                            info.el.style.setProperty('display', 'none', 'important');
                                        }
                                    }}
                                />
                            </div>
                            <div className="recurring-monthlies">
                                <h2>Recurring Monthlies</h2>
                                <h3>These tournaments happen monthly but can vary on the exact scheduled day.</h3>
                                {recurringMonthlies.map(t => (
                                    <div key={t.name} className='calendar-event-logo-container' onClick={(e) => handleNonCalendarEventClick(e, t)}>
                                        <img src={`/images/tournamentlogos/${t.logo}`} className="calendar-event-logo"></img>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {selectedEvent && (
                            <div
                                className="popover"
                                style={{
                                    top: `${popoverPosition.top}px`,
                                    left: `${popoverPosition.left}px`,
                                    position: 'absolute',
                                    zIndex: 1000,
                                }}
                            >
                                <button 
                                    className="close-btn" 
                                    onClick={(e) => { 
                                        e.preventDefault(); 
                                        const currentScroll = window.scrollY;
                                        setSelectedEvent(null);
                                        
                                        requestAnimationFrame(() => {
                                            window.scrollTo(0, currentScroll);
                                        });
                                    }}>
                                    &times;
                                </button>
                                <h2>{selectedEvent.title}</h2>
                                <p>Venue Address: {selectedEvent.address}</p>
                                <p>Doors Open: {selectedEvent.doorsOpen}</p>
                                <p>Tournament Start Time: {selectedEvent.tournamentStartTime}</p>
                                <p>{selectedEvent.frequency}</p>
                                <p>{selectedEvent.note}</p>
                            </div>
                        )}
                    </div>
                    </motion.div>
            </AnimatePresence>
        )
    }
}

export default EventCalendar;