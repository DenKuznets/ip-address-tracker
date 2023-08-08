import React, { useEffect, useState } from "react";
import { Marker, Popup, useMapEvents } from "react-leaflet";
import { useAppStore } from "../../AppStore";

function LocationMarker() {
    const [position, setPosition] = useState(null);
    
    const latlng = useAppStore((state) => state.latlng);

    const map = useMapEvents({
        locationfound(e) {
            console.log(e);
            setPosition(e.latlng);
            map.flyTo(e.latlng, map.getZoom());
        },
    });
    
    map.setView(latlng);

    return position === null ? null : (
        <Marker position={position}>
            <Popup>You are here</Popup>
        </Marker>
    );
}

export default LocationMarker;
