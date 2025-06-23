import { React, useRef} from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './MapView.css'
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: markerIcon2x,
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
});

function MapView({tournaments}) {
    const center = [33.6455, -117.8677];
    const swBounds = [30.5, -126];
    const neBounds = [38, -112];

    const markersRef = useRef({});

    const handleListItemClick = (locationId) => {
        const marker = markersRef.current[locationId];
        if (marker) {
            marker.openPopup();
        }
    };

    const isMobile = L.Browser.mobile;

    return (
        <>
            <MapContainer 
                center={center} 
                zoom={isMobile ? 7 : 8}  
                maxBounds={[swBounds, neBounds]} 
                maxBoundsViscosity={1.0} 
                scrollWheelZoom={false} 
                style={{ height: '500px', width: '100%' }}
            >
                <TileLayer
                    attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {tournaments.map(t => (
                    <Marker key={t.id} position={[t.lat, t.lng]} ref={el => markersRef.current[t.id] = el}>
                        <Popup className="tournament-map-popup">
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

            {tournaments.map(t => (
                <div key={t.id} className="tournament-list-item" onClick={() => handleListItemClick(t.id)}>
                    <span className="tournament-date">{new Date(t.startAt * 1000).toLocaleDateString('en-US', {month: 'short', day: 'numeric'})} </span>
                    {t.name} - {t.venueAddress}
                </div>
            ))}
            
        </>
    );
}

export default MapView;