import { Stack, Typography } from "@mui/material";

interface Props {
    resultText: {
        header: string;
        text: string;
    };
}

const ResultField: React.FC<Props> = (props) => {
    return (
        <Stack sx={{ alignItems: "center", gap: "0.1rem" }} bgcolor={""}>
            <Typography color={"hsl(0, 0%, 59%)"} variant="body2">
                {props.resultText.header}
            </Typography>
            <Typography variant="body1">{props.resultText.text}</Typography>
        </Stack>
    );
};

export default ResultField;
