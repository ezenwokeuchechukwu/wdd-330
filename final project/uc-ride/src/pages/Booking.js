import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const Booking = () => {
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    });

    if (!isLoaded) return <div>Loading Map...</div>;

    return (
        <div>
            <h2>Booking Page</h2>
            <GoogleMap
                center={{ lat: 6.5244, lng: 3.3792 }}
                zoom={12}
                mapContainerStyle={{ width: '100%', height: '400px' }}
            />
        </div>
    );
};

export default Booking;