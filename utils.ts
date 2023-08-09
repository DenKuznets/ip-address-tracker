import { createTheme } from "@mui/material";
import axios from "axios";

// get local data
// const getData = () => axios.get("http://localhost:3000/data");

// get data from geo API
export const getGeoData = (input: string) => {
    return axios.get(
        `https://geo.ipify.org/api/v2/country,city?apiKey=at_z9AppVjUfNvHRixRz1uUngxUy6A1h&ipAddress=${input}&domain=${input}`
    );
};

export const theme = createTheme({
    components: {
        MuiCssBaseline: {
            styleOverrides: `
        body {
          overflow: hidden;
        }
      `,
        },
    },
    typography: {
        fontFamily: "'Rubik', sans-serif",
        h1: {
            fontSize: "2rem",
            fontWeight: "500",
            "@media (max-width:900px)": {
                fontSize: "1.6rem",
            },
        },
    },
});

export const errorMessage = (error: string) => {
    switch (true) {
        case error === "ERR_BAD_REQUEST":
            return "Domain/IP not found";

        default:
            return "Oops, there is an error. Please try again later.";
    }
};
