import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import BlueBox from "./components/BlueBox";
import Map from "./components/Map";
import Search from "./components/Search/";
import { useEffect } from "react";
import { getGeoData, theme } from "../utils";
import { useAppStore } from "./AppStore";
import { AxiosError } from "axios";

function App() {
    const loading = useAppStore((state) => state.loading);
    const setLoading = useAppStore((state) => state.setLoading);
    const setError = useAppStore((state) => state.setError);
    const input = useAppStore((state) => state.input);
    const setGeoData = useAppStore((state) => state.setGeoData);

    useEffect(() => {
        async function getAPIData() {
            try {
                const geoData = await getGeoData(input);
                setGeoData({
                    ip: geoData.data.ip,
                    country: geoData.data.location.country,
                    region: geoData.data.location.region,
                    timezone: geoData.data.location.timezone,
                    isp: geoData.data.isp,
                    lat: geoData.data.location.lat,
                    lng: geoData.data.location.lng,
                });
            } catch (e) {
                if (e instanceof AxiosError) {
                    setError(e.code);
                }
            }
        }
        if (loading) {
            getAPIData();
        }

        return () => {
            setLoading(false);
        };
    }, [input, loading]);
    return (
        <Box>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <BlueBox />
                <Search />
                <Map />
            </ThemeProvider>
        </Box>
    );
}

export default App;
