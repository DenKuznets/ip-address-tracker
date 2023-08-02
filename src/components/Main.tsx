import { Stack, Typography } from "@mui/material";
import IPInput from "./IPInput";
import SearchResult from "./SearchResult";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const Main = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <Stack
                position={"fixed"}
                top={0}
                left={0}
                alignItems={"center"}
                width={"100%"}
                p={3}
            >
                <Typography mb={4} color={"white"} variant="h1">
                    IP Address Tracker
                </Typography>
                <IPInput />
                <SearchResult />
            </Stack>
        </QueryClientProvider>
    );
};

export default Main;
