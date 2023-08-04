import { IconButton, InputBase, Stack } from "@mui/material";
import { useState } from "react";

interface Props {
    handleInput: (userInput: string) => void;
}

const IPInput: React.FC<Props> = (props) => {
    const [text, setText] = useState("");

    return (
        <Stack
            sx={{
                maxWidth: "35rem",
                mb: { xs: "1.4rem", sm: "3rem" },
            }}
            justifyContent={"center"}
            width={"100%"}
            direction={"row"}
        >
            <InputBase
                value={text}
                onChange={(e) => setText(e.target.value)}
                sx={{
                    bgcolor: "white",
                    borderRadius: "1rem 0 0 1rem",
                    py: 1.3,
                    px: 3,
                    minWidth: "10rem",
                    width: "100%",
                    border: "none",
                    fontSize: { xs: "1.2rem", sm: "1.2rem" },
                }}
                type="text"
                placeholder="Search for any IP address or domain"
            />
            <IconButton
                onClick={() => props.handleInput(text)}
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
