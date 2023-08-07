import { IconButton, InputBase, Stack } from "@mui/material";
import { useAppStore } from "../../AppStore";
import { useRef } from "react";

const IPInput = () => {
    // const [text, setText] = useState("");
    // const input = useAppStore((state) => state.input);
    const setInput = useAppStore((state) => state.setInput);
    const inputBaseRef = useRef<HTMLInputElement>(null);

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
                // value={input}
                // onChange={(e) => setInput(e.target.value)}
                ref={inputBaseRef}
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
                onClick={() => {
                    const input = inputBaseRef?.current?.querySelector("input");
                    if (input) {
                        setInput(input.value);
                    }
                }}
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
