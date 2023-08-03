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
                    p: 4,
                    "@media (max-width:425px)": {
                        p: 3,
                    },
                }}
                position={"fixed"}
                top={0}
                left={0}
                alignItems={"center"}
                width={"100%"}
            >
                <Typography
                    sx={{
                        mb: 3,
                        "@media (max-width:425px)": {
                            mb: 4,
                        },
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
