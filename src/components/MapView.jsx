import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './MapView.css'

function MapView({tournaments}) {
    console.log(tournaments)
    const center = [33.6455, -117.8677];

    return (
        <MapContainer center={center} zoom={8} style={{ height: '500px', width: '100%' }}>
        <TileLayer
            attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {tournaments.map(t => (
            <Marker key={t.id} position={[t.lat, t.lng]}>
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
    );
}

export default MapView;