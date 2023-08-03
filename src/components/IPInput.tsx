import { IconButton, InputBase, Stack } from "@mui/material";

const IPInput = () => {
    return (
        <Stack
            sx={{
                maxWidth: "35rem",
                mb: "3rem",
                "@media (max-width:425px)": {
                    mb: "1.4rem",
                },
            }}
            justifyContent={"center"}
            width={"100%"}
            direction={"row"}
        >
            <InputBase
                sx={{
                    bgcolor: "white",
                    borderRadius: "1rem 0 0 1rem",
                    py: 1.3,
                    px: 3,
                    minWidth: "17rem",
                    fontSize: "1.2rem",
                    width: "100%",
                    border: "none",
                    "@media (max-width:425px)": {
                        fontSize: "1.2rem",
                    },
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
    );
};

export default IPInput;
