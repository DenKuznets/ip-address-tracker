import { Stack, Typography, InputBase, IconButton } from "@mui/material";

const Main = () => {
    return (
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
            <Stack justifyContent={"center"} width={"100%"} direction={"row"}>
                <InputBase
                    sx={{
                        bgcolor: "white",
                        borderRadius: "1rem 0 0 1rem",
                        py: 1.3,
                        px: 3,
                        fontSize: "1.2rem",
                        minWidth: "17rem",
                        width: "100%",
                        border: "none",
                    }}
                    type="text"
                    placeholder="Search for any IP address or domain"
                />
                <IconButton
                    sx={{
                        bgcolor: "black",
                        borderRadius: "0 1rem 1rem 0",
                        minWidth: "55px",
                        "&:hover": {
                            bgcolor: "hsl(0, 0%, 17%)",
                        },
                    }}
                >
                    <img src="./images/icon-arrow.svg" />
                </IconButton>
            </Stack>
        </Stack>
    );
};

export default Main;
