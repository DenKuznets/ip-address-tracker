import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import {
    MapContainer,
    Marker,
    Popup,
    TileLayer,
    useMapEvents,
} from "react-leaflet";

const Map = () => {
    function LocationMarker() {
        const [position, setPosition] = useState(null);

        const map = useMapEvents({
            locationfound(e) {
                // console.log(e);
                setPosition(e.latlng);
                map.flyTo(e.latlng, map.getZoom());
            },
        });

        useEffect(() => {
            map.locate();
        }, []);

        return position === null ? null : (
            <Marker position={position}>
                <Popup>You are here</Popup>
            </Marker>
        );
    }

    // map.setView(latlng)
    // где взять latlng?
    // https://nominatim.openstreetmap.org/search?q=sankt-peterburg+ru&format=json&polygon=1&addressdetails=1

    return (
        <Box bgcolor={"lightgreen"} height={"55vh"}>
            <MapContainer
                center={[51.505, -0.09]}
                zoom={13}
                scrollWheelZoom={true}
                style={{ height: "100%" }}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <LocationMarker />
            </MapContainer>
        </Box>
    );
};

export default Map;
