import { Stack, Typography } from "@mui/material";
import { useEffect, useRef } from "react";

interface Props {
    resultText: {
        header: string;
        text: string;
    };
}

const ResultField: React.FC<Props> = (props) => {
    const body1Ref = useRef("");
    // console.log(body1Ref.current);
    const handleResize = (e) => {
        // console.log(e);
        console.log(body1Ref.current.getClientBoundingRect());
    };
    useEffect(() => {
        window.addEventListener("resize", (e) => handleResize(e));

        return () => {
            window.removeEventListener("resize", (e) => handleResize(e));
        };
    }, []);

    return (
        <Stack
            sx={{
                alignItems: { xs: "center", md: "flex-start" },
                gap: "0.1rem",
            }}
            bgcolor={""}
        >
            <Typography
                sx={{
                    fontSize: { xs: "0.7rem", md: "0.83rem" },
                    // fontSize: "0.7rem",
                    fontWeight: "700",
                    letterSpacing: "1.5px",
                }}
                color={"hsl(0, 0%, 59%)"}
                variant="body2"
            >
                {props.resultText.header}
            </Typography>
            <Typography
                ref={body1Ref}
                sx={{
                    fontSize: { xs: "1.4rem", md: "1.8rem" },
                    fontWeight: "500",
                    minHeight: "3rem",
                    textAlign: { xs: "center", md: "start" },
                    overflowWrap: "break-word",
                }}
                variant="body1"
            >
                {props.resultText.text}
            </Typography>
        </Stack>
    );
};

export default ResultField;
