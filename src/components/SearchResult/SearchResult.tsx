import { Stack } from "@mui/material";
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
                gap: "1.05rem",
                p: 3,
                alignItems: "center",
                maxWidth: "70rem",
                flexDirection: { sm: "row" },
                justifyContent: { sm: "center" },
            }}
            width={"100%"}
            bgcolor={"white"}
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
