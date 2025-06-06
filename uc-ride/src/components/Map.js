import React, { useEffect, useRef } from 'react';

const Map = () => {
    const mapRef = useRef(null);

    useEffect(() => {
        const initializeMap = () => {
            new window.google.maps.Map(mapRef.current, {
                center: { lat: 9.05785, lng: 7.49508 }, // Abuja
                zoom: 12,
            });
        };

        if (window.google && window.google.maps) {
            initializeMap();
        } else {
            throw new Error('Google Maps failed to load.');
        }
    }, []);

    return React.createElement('div', { ref: mapRef, style: { width: '100%', height: '400px' } });
};

export default Map;