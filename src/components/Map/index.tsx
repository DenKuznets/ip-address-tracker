import { Box, Stack } from "@mui/material";
import { MapContainer, TileLayer } from "react-leaflet";
import { useAppStore } from "../../AppStore";
import LocationMarker from "./LocationMarker";

const Map = () => {
    const geoData = useAppStore((state) => state.geoData);
    return (
        <Box
            sx={{
                height: { xs: "55vh", md: "100%" },
            }}
            bgcolor={"lightgreen"}
            overflow={'hidden'}
        >
            {geoData ? (
                <MapContainer
                    // center={{ lat: 51.505, lng: -0.09 }}
                    center={{ lat: geoData.lat, lng: geoData.lng }}
                    zoom={13}
                    zoomControl={false}
                    scrollWheelZoom={true}
                    style={{ height: "100%" }}
                    
                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <LocationMarker />
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
