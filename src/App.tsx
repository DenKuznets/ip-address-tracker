import { Box, CssBaseline, createTheme, ThemeProvider } from "@mui/material";
import BlueBox from "./components/BlueBox";
import Map from "./components/Map";
import Search from "./components/Search/Search";

const theme = createTheme({
    typography: {
        fontFamily: "'Rubik', sans-serif",
        h1: {
            fontSize: "2rem",
            fontWeight: "500",
            "@media (max-width:600px)": {
                fontSize: "1.6rem",
            },
        },
    },
});

function App() {
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
