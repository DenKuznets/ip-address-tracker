import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import BlueBox from "./components/BlueBox";
import Map from "./components/Map/Map";
import Search from "./components/Search/Search";
import { useEffect } from "react";
import { getGeoData, getLatLng, theme } from "../utils";
import { useAppStore } from "./AppStore";

function App() {
    const loading = useAppStore((state) => state.loading);
    const setLoading = useAppStore((state) => state.setLoading);
    const input = useAppStore((state) => state.input);
    const setIpDomainGeoData = useAppStore((state) => state.setIpDomainGeoData);

    useEffect(() => {
        async function getAPIData() {
            const geoData = await getGeoData(input);
            console.log(geoData.data);
            setIpDomainGeoData({
                ip: geoData.data.ip,
                country: geoData.data.location.country,
                region: geoData.data.location.region,
                timezone: geoData.data.location.timezone,
                isp: geoData.data.isp,
            });
            const latlangData = await getLatLng(
                geoData.data.location.country,
                geoData.data.location.region
            );
            console.log(
                latlangData.data.features[0].properties.lat,
                latlangData.data.features[0].properties.lon
            );
        }
        if (loading) {
            // getGeoData(input).then((result) => {
            //     // console.log(result.data);
            //     const data = {
            //         ip: result.data.ip,
            //         country: result.data.location.country,
            //         region: result.data.location.region,
            //         timezone: result.data.location.timezone,
            //         isp: result.data.isp,
            //     };
            //     setData(data);
            // });
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
                {/* <Map /> */}
                <Search />
            </ThemeProvider>
        </Box>
    );
}

export default App;
