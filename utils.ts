import { createTheme } from "@mui/material";
import axios, { AxiosError } from "axios";

// get local data
// const getData = () => axios.get("http://localhost:3000/data");

// get data from geo API
export const getGeoData = async (input: string) => {
    try {
        return await axios.get(
            `https://geo.ipify.org/api/v2/country,city?apiKey=at_z9AppVjUfNvHRixRz1uUngxUy6A1h&ipAddress=${input}&domain=${input}`
        );
    } catch (e) {
        if (e instanceof AxiosError) {
            console.log("error", e);
            // return e.message;
        }
    }
};

export const theme = createTheme({
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
