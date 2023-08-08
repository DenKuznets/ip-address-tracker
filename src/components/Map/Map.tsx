import { Box, Stack } from "@mui/material";
import { MapContainer, TileLayer } from "react-leaflet";
import { useAppStore } from "../../AppStore";

const Map = () => {
    const latlng = useAppStore((state) => state.latlng);
    if (!latlng) return <div>Loading...</div>;
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
