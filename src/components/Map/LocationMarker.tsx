import React, { useEffect, useState } from "react";
import { Marker, Popup, useMap } from "react-leaflet";
import { useAppStore } from "../../AppStore";

function LocationMarker() {
    const latlng = useAppStore((state) => state.latlng);
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
