import React, { useEffect } from "react";
import { Marker, Popup } from "react-leaflet";

function LocationMarker() {
    const [position, setPosition] = useState(null);

    const map = useMapEvents({
        locationfound(e) {
            // console.log(e);
            setPosition(e.latlng);
            map.flyTo(e.latlng, map.getZoom());
        },
    });

   

    return position === null ? null : (
        <Marker position={position}>
            <Popup>You are here</Popup>
        </Marker>
    );
}

export default LocationMarker;
