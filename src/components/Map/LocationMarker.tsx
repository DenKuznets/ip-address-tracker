import { useEffect, useMemo, useState } from "react";
import { Marker, useMap } from "react-leaflet";
import { useAppStore } from "../../AppStore";
import L from "leaflet";

const icon = new L.Icon({
    iconUrl: "./images/icon-location.svg",
    iconSize: new L.Point(46, 56),
    iconAnchor: new L.Point(23, 56),
});

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
        // map.setView({ ...latlng, lat: latlng.lat + 0.038 })

        // перемещение с анимацией перелета
        map.flyTo({ ...latlng, lat: latlng.lat + 0.02 });
    }, [latlng, map]);

    return position === null ? null : (
        <Marker icon={icon} position={position}></Marker>
    );
}

export default LocationMarker;
