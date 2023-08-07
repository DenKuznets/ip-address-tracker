import { Box, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import {
    MapContainer,
    Marker,
    Popup,
    TileLayer,
    useMapEvents,
} from "react-leaflet";
import { useAppStore } from "../../AppStore";
import axios from "axios";

const getLatLng = (country: string, region: string) => {
    console.log(country, region);
    return axios.get(
        `https://nominatim.openstreetmap.org/search?q=${region}+${country}&format=json&polygon=1&addressdetails=1`
    );
};

// axios.get(
//     `https://nominatim.openstreetmap.org/search?q=Moskva+RU&format=json&polygon=1&addressdetails=1`
// );

const Map = () => {
    const data = useAppStore((state) => state.data);
    // console.log({data});
    const [loading, setLoading] = useState(true);
    const [latlng, setLatlng] = useState("");
    const [position, setPosition] = useState(null);

    // const map = useMapEvents({
    //     locationfound(e) {
    //         // console.log(e);
    //         setPosition(e.latlng);
    //         map.flyTo(e.latlng, map.getZoom());
    //     },
    // });

    useEffect(() => {
        if (loading) {
            getLatLng(data.country, data.region).then((result) => {
                // console.log(result);
                const newLatlng = {
                    lat: result.data[0].lat,
                    lng: result.data[0].lon,
                };
                // console.log({ newLatlng });
                setLatlng(newLatlng);
            });
        }

        return () => {
            setLoading(false);
        };
    }, [loading]);

    // useEffect(() => {
    //     if (latlng) {
    //         map.setView(latlng);
    //     }
    // }, [map, latlng]);

    // map.setView(latlng)
    // где взять latlng?
    // https://nominatim.openstreetmap.org/search?q=sankt-peterburg+ru&format=json&polygon=1&addressdetails=1

    return (
        <Box bgcolor={"lightgreen"} height={"55vh"}>
            {latlng ? (
                <MapContainer
                    // center={{ lat: 51.505, lng: -0.09 }}
                    center={latlng}
                    zoom={13}
                    scrollWheelZoom={true}
                    style={{ height: "100%" }}
                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {/* <LocationMarker /> */}
                </MapContainer>
            ) : (
                <Stack
                    sx={{ alignItems: "center", justifyContent: "center" }}
                    height={"100%"}
                >
                    Loading...
                </Stack>
            )}
        </Box>
    );
};

export default Map;
