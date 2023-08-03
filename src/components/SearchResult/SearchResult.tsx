import { Stack, Divider } from "@mui/material";
import ResultField from "./ResultField";

interface Props {
    data: {
        ip: string;
        country: string;
        region: string;
        timezone: string;
        isp: string;
    };
}

const SearchResult: React.FC<Props> = ({ data }) => {
    // console.log({...props});

    return (
        <Stack
            sx={{
                borderRadius: "1rem",
                gap: { xs: "1.05rem", md: "3rem" },
                p: { xs: 3, sm: 4.55 },
                alignItems: "center",
                maxWidth: { sm: "35rem", md: "70rem" },
                flexDirection: { md: "row" },
                justifyContent: { sm: "flex-start" },
            }}
            width={"100%"}
            bgcolor={"white"}
            divider={
                <Divider
                    sx={{ borderColor: "hsl(0, 0%, 74.50980392156863%)" }}
                    orientation="vertical"
                    flexItem
                />
            }
        >
            <ResultField
                resultText={{
                    header: "IP ADDRESS",
                    text: data.ip,
                }}
            />
            <ResultField
                resultText={{
                    header: "LOCATION",
                    text: `${data.region} , ${data.country}`,
                }}
            />
            <ResultField
                resultText={{
                    header: "TIMEZONE",
                    text: data.timezone,
                }}
            />
            <ResultField
                resultText={{
                    header: "ISP",
                    text: data.isp,
                }}
            />
        </Stack>
    );
};

export default SearchResult;
