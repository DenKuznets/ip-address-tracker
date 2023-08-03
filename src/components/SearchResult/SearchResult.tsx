import { Stack, Divider } from "@mui/material";
import axios from "axios";
import { useQuery } from "react-query";
import ResultField from "./ResultField";

const SearchResult = () => {
    const getData = () => axios.get("http://localhost:3000/data");
    const { data, isLoading, error } = useQuery({
        queryKey: ["ipdata"],
        queryFn: () => getData(),
    });
    if (isLoading) return <div>"Loading..."</div>;
    if (error instanceof Error)
        return <div>"An error has occurred: " + error.message</div>;

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
                    text: data?.data.ip,
                }}
            />
            <ResultField
                resultText={{
                    header: "LOCATION",
                    text: `${data?.data.location.region} , ${data?.data.location.country}`,
                }}
            />
            <ResultField
                resultText={{
                    header: "TIMEZONE",
                    text: data?.data.location.timezone,
                }}
            />
            <ResultField
                resultText={{
                    header: "ISP",
                    text: data?.data.isp,
                }}
            />
        </Stack>
    );
};

export default SearchResult;
