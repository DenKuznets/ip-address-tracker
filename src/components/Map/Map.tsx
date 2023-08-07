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
import { googleApi } from "../../../googleApi";

const getLatLng = (country: string, region: string) => {
    console.log(country, region);

    return axios.get(
        `https://api.geoapify.com/v1/geocode/search?text=${country},${region}&apiKey=${googleApi}`
    );
};

const Map = () => {
    const data = useAppStore((state) => state.data);
    // console.log(data);
    const [latlng, setLatlng] = useState("");
    const loading = useAppStore((state) => state.loading);
    const setLoading = useAppStore((state) => state.setLoading);
    // const [position, setPosition] = useState(null);

    useEffect(() => {
        if (loading && data) {
            getLatLng(data.country, data.region)
                .then((result) => {
                    const newLatlng = {
                        lat: result.data.features[0].properties.lat,
                        lng: result.data.features[0].properties.lon,
                    };
                    setLatlng(newLatlng);
                })
                .catch((e) => {
                    console.log("error", e);
                });
        }

        return () => {
            setLoading(false);
        };
    }, [data, loading]);

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
