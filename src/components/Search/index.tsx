import { Stack, Typography } from "@mui/material";
import IPInput from "./IPInput";
import SearchResult from "./SearchResult";

const Search = () => {
    return (
        <Stack
            sx={{
                p: { xs: 3, md: 4 },
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
                    mb: { xs: 4, md: 3 },
                }}
                color={"white"}
                variant="h1"
            >
                IP Address Tracker
            </Typography>
            <IPInput />
            <SearchResult />
        </Stack>
    );
};

export default Search;
