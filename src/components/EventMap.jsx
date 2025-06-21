import { React, useRef, useContext, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { UpcomingTournamentDataContext } from '../context/UpcomingTournamentDataContext';
import './EventMap.css'
import tournamentData from '../data/tournaments.json';
import {AnimatePresence, motion} from 'framer-motion';

function EventMap({dataType}) {
    const {tournaments} = useContext(UpcomingTournamentDataContext);
    const [selectedRegions, setSelectedRegions] = useState([]);
    const [selectedFrequencies, setSelectedFrequencies] = useState([]);
    const center = [33.6455, -117.8677];

    const markersRef = useRef({});

    if (dataType == 'upcoming') {

        const handleListItemClick = (locationId) => {
            const marker = markersRef.current[locationId];
            if (marker) {
                marker.openPopup();
            }
        };
        
        if (!tournaments) {
            return <div>Loading map...</div>;
        }

        return (
            <AnimatePresence mode="wait">
                <motion.div
                    key="upcomingMap"
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 100, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                    <div className="map-header">
                        <h1> SoCal Melee Event Map </h1>
                        <h2> This is a map of upcoming events with published start.gg pages in SoCal.</h2>
                    </div>
                    <div className="event-map-wrapper">
                        <div className='event-map-container'>
                            <MapContainer center={center} zoom={8} style={{ height: '500px', width: '100%' }}>
                                <TileLayer
                                    attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                />
                                {tournaments.map(t => (
                                    <Marker key={t.id} position={[t.lat, t.lng]} ref={el => markersRef.current[t.id] = el}>
                                        <Popup>
                                            <div className="map-event-logo-section">
                                                <img src={t.images[0].url} className="map-event-logo"></img><br/>
                                            </div>
                                            <div className="map-event-info-section">
                                                <b>{t.name}</b> <br/>
                                                {t.venueAddress} <br/>
                                                Date and Time: {new Date(t.startAt * 1000).toLocaleString()}<br/>
                                                <a href={`https://start.gg/${t.url}`} target="_blank" rel="noopener noreferrer">Link to start.gg page</a> <br/>
                                                {t.streams && t.streams.length > 0 && t.streams[0].streamName && (
                                                    <a 
                                                        href={`https://twitch.tv/${t.streams[0].streamName}`} 
                                                        target="_blank" 
                                                        rel="noopener noreferrer"
                                                    >
                                                        Watch Stream
                                                    </a>
                                                )}
                                            </div> 
                                        </Popup>
                                    </Marker>
                                ))}
                            </MapContainer>
                        </div>

                        <div className="tournament-list">
                            {tournaments.map(t => (
                                <div key={t.id} className="tournament-list-item" onClick={() => handleListItemClick(t.id)}>
                                    <span className="tournament-date">{new Date(t.startAt * 1000).toLocaleDateString('en-US', {month: 'short', day: 'numeric'})} </span>
                                    {t.name} - {t.venueAddress}
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>
        );
    }

    else {

        const handleRegionChange = (region) => {
            setSelectedRegions((prev) =>
                prev.includes(region) ? prev.filter((r) => r !== region) : [...prev, region]
            );
        };

        const handleFrequencyChange = (frequency) => {
            setSelectedFrequencies((prev) =>
                prev.includes(frequency) ? prev.filter((f) => f !== frequency) : [...prev, frequency]
            );
        };

        return (
            <AnimatePresence mode="wait">
                <motion.div
                    key="generalMap"
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -100, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                    <div className="map-header">
                        <h1> SoCal Melee Event Map </h1>
                        <h2> This is a map of known events in SoCal. Contact cliché if you would like your event to show up here!</h2>
                        <h3> Disclaimer: This map doesn't guarantee that these events are happening on these dates. Please consult the appropriate regional discords or the Upcoming map to verify if an event is happening. </h3>
                    </div>
                    <div className="event-filters">
                        <div className="filter-container">
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
                            </div>
                        </div>
                        <div className="filter-container">
                            Filter by Frequency:
                            <div className="filter-options">
                                <label>
                                    <input
                                        type="checkbox"
                                        value="Weekly"
                                        checked={selectedFrequencies.includes("Weekly")}
                                        onChange={() => handleFrequencyChange("Weekly")}
                                    />
                                    Weekly
                                </label>
                                <label>
                                    <input
                                        type="checkbox"
                                        value="San Diego"
                                        checked={selectedFrequencies.includes("Monthly")}
                                        onChange={() => handleFrequencyChange("Monthly")}
                                    />
                                    Monthly
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="event-map-wrapper">
                        <div className='event-map-container'>
                            <MapContainer center={center} zoom={8} style={{ height: '500px', width: '100%' }}>
                                <TileLayer
                                    attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                />
                                {tournamentData.
                                filter(t => (selectedRegions.length === 0 || selectedRegions.includes(t.region)) &&
                                        (selectedFrequencies.length === 0 || selectedFrequencies.includes(t.frequency))).
                                map(t => (
                                    <Marker key={t.name} position={[t.lat, t.lng]} ref={el => markersRef.current[t.id] = el}>
                                        <Popup>
                                            <div className="map-event-logo-section">
                                                <img src={`/images/tournamentlogos/${t.logo}`} className="map-event-logo"></img><br/>
                                            </div>
                                            <div className="map-event-info-section">
                                                <b>{t.name}</b> <br/>
                                                {t.address} <br/>
                                                Doors Open: {t.doorsOpen} <br/>
                                                Tournament Start Time: {t.startTime} <br/>
                                                {t.frequency} <br/>
                                                {t.note} <br/>
                                            </div> 
                                        </Popup>
                                    </Marker>
                                ))}
                            </MapContainer>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>
        )
    }
}

export default EventMap;