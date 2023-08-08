import { useEffect, useMemo, useState } from "react";
import { Marker, Popup, useMap } from "react-leaflet";
import { useAppStore } from "../../AppStore";

function LocationMarker() {
    const geoData = useAppStore((state) => state.geoData);
    
    const latlng = useMemo(
        () => ({
            lat: geoData.lat,
            lng: geoData.lng,
        }),
        [geoData]
    );
    const [position, setPosition] = useState(latlng);
    const map = useMap();

    useEffect(() => {
        setPosition(latlng);
        // мгновенное перемещение
        // map.setView(latlng)

        // перемещение с анимацией перелета
        map.flyTo(latlng);
        
    }, [latlng, map]);

    return position === null ? null : (
        <Marker position={position}>
            <Popup>You are here</Popup>
        </Marker>
    );
}

export default LocationMarker;
