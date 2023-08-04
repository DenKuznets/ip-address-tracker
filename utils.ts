import { createTheme } from "@mui/material";
import axios from "axios";

export const mockData = {
    ip: "loading",
    country: "loading",
    region: "loading",
    timezone: "loading",
    isp: "loading",
};

// get local data
// const getData = () => axios.get("http://localhost:3000/data");

// get data from geo API
export const getData = (input: string) => {
    const regexDomain =
        /^((?!-))(xn--)?[a-z0-9][a-z0-9-_]{0,61}[a-z0-9]{0,1}.(xn--)?([a-z0-9-]{1,61}|[a-z0-9-]{1,30}.[a-z]{2,})$/;

    return regexDomain.test(input)
        ? axios.get(
              `https://geo.ipify.org/api/v2/country?apiKey=at_z9AppVjUfNvHRixRz1uUngxUy6A1h&domain=${input}`
          )
        : axios.get(
              `https://geo.ipify.org/api/v2/country?apiKey=at_z9AppVjUfNvHRixRz1uUngxUy6A1h&ipAddress=${input}`
          );
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
