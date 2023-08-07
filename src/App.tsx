import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import BlueBox from "./components/BlueBox";
import Map from "./components/Map/Map";
import Search from "./components/Search/Search";
import { useEffect } from "react";
import { getData, theme } from "../utils";
import { useAppStore } from "./AppStore";

function App() {
    // const [input, setInput] = useState("");
    // const [loading, setLoading] = useState(true);
    // const [data, setData] = useState(mockData);
    const loading = useAppStore((state) => state.loading);
    const input = useAppStore((state) => state.input);
    const setLoading = useAppStore((state)=> state.setLoading);
    const setData = useAppStore((state)=> state.setData);

    useEffect(() => {
        if (input) {
            setLoading(true);
        }
    }, [input]);

    useEffect(() => {
        if (loading) {
            getData(input).then((result) => {
                // console.log(result.data);
                const data = {
                    ip: result.data.ip,
                    country: result.data.location.country,
                    region: result.data.location.region,
                    timezone: result.data.location.timezone,
                    isp: result.data.isp,
                };
                setData(data);
            });
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
                <Map />
                <Search />
            </ThemeProvider>
        </Box>
    );
}

export default App;
