import { Stack, Typography } from "@mui/material";
import IPInput from "./IPInput";
import SearchResult from "./SearchResult/SearchResult";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const Main = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <Stack
                sx={{
                    p: { xs: 3, sm: 4 },
                }}
                position={"fixed"}
                top={0}
                left={0}
                alignItems={"center"}
                width={"100%"}
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
                <IPInput />
                <SearchResult />
            </Stack>
        </QueryClientProvider>
    );
};

export default Main;
