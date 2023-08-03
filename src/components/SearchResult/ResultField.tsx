import { Stack, Typography } from "@mui/material";

interface Props {
    resultText: {
        header: string;
        text: string;
    };
}

const ResultField: React.FC<Props> = (props) => {
    return (
        <Stack
            sx={{
                alignItems: { xs: "center", sm: "flex-start" },
                gap: "0.1rem",
            }}
            bgcolor={""}
        >
            <Typography
                sx={{
                    fontSize: { xs: "0.7rem", sm: "0.83rem" },
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
                sx={{
                    fontSize: { sm: "1.8rem", xs: "1.4rem" },
                    fontWeight: "500",
                    minHeight:'3rem',
                }}
                variant="body1"
            >
                {props.resultText.text}
            </Typography>
        </Stack>
    );
};

export default ResultField;
