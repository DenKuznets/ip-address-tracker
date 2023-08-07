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
    // console.log(country, region);
    // return axios.get(
    //     `https://nominatim.openstreetmap.org/search?q=${region}+${country}&format=json&polygon=1&addressdetails=1`
    // );
    return axios.get(
        `https://api.geoapify.com/v1/geocode/search?text=${country},${region}&apiKey=65dbe9559e124478be219db52474bfff`
    );
};

const Map = () => {
    const data = useAppStore((state) => state.data);
    // console.log(data);
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
        if (data) setLoading(true);
    }, [data]);

    useEffect(() => {
        if (loading && data) {
            // console.log("getting latlang", data);
            getLatLng(data.country, data.region)
                .then((result) => {
                    // console.log("result", result.data);
                    // console.log(
                    //     "result",
                    //     result.data.features[0].properties.lat,
                    //     result.data.features[0].properties.lon
                    // );
                    const newLatlng = {
                        lat: result.data.features[0].properties.lat,
                        lng: result.data.features[0].properties.lon,
                    };
                    // console.log({ newLatlng });
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
