import { Stack, Divider } from "@mui/material";
import ResultField from "./ResultField";
import { useAppStore } from "../../AppStore";

const SearchResult = () => {
    const data = useAppStore((state) => state.geoData);
    if (!data) return <div>Loading...</div>;
    return (
        <Stack
            sx={{
                borderRadius: "1rem",
                gap: { xs: "0", md: "3rem" },
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
