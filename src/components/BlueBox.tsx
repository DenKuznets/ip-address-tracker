import {
    Box
} from "@mui/material";

const BlueBox = () => {
    return (
        <Box
            bgcolor="lightblue"
            sx={{
                backgroundImage: {
                    xs: "url('./images/pattern-bg-mobile.png')",
                    md: "url('./images/pattern-bg-desktop.png')",
                },
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                height: { xs: "19rem", md:'17.5rem' },
            }}
        />
    );
};

export default BlueBox;
