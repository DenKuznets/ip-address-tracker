import { Stack, Typography } from "@mui/material";
import IPInput from "./IPInput";
import SearchResult from "./SearchResult";
import { useEffect, useState } from "react";
import axios from "axios";

const regexDomain =
    /^((?!-))(xn--)?[a-z0-9][a-z0-9-_]{0,61}[a-z0-9]{0,1}.(xn--)?([a-z0-9-]{1,61}|[a-z0-9-]{1,30}.[a-z]{2,})$/;

// const getData = () => axios.get("http://localhost:3000/data");

// get data from geo API
const getData = (input: string) => {
    return regexDomain.test(input)
        ? axios.get(
              `https://geo.ipify.org/api/v2/country?apiKey=at_z9AppVjUfNvHRixRz1uUngxUy6A1h&domain=${input}`
          )
        : axios.get(
              `https://geo.ipify.org/api/v2/country?apiKey=at_z9AppVjUfNvHRixRz1uUngxUy6A1h&ipAddress=${input}`
          );
};

const mockData = {
    ip: "loading",
    country: "loading",
    region: "loading",
    timezone: "loading",
    isp: "loading",
};

const Search = () => {
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(mockData);
    useEffect(() => {
        if (input) {
            setLoading(true);
        }
    }, [input]);

    useEffect(() => {
        if (loading) {
            getData(input).then((result) => {
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
        <Stack
            sx={{
                p: { xs: 3, sm: 4 },
            }}
            position={"fixed"}
            top={0}
            left={0}
            alignItems={"center"}
            width={"100%"}
            zIndex={1000}
        >
            <Typography
                sx={{
                    mb: { xs: 4, sm: 3 },
                }}
                color={"white"}
                variant="h1"
            >
                IP Address Tracker
            </Typography>
            <IPInput handleInput={setInput} />
            {data ? <SearchResult data={data} /> : <div>"Loading..."</div>}
        </Stack>
    );
};

export default Search;
