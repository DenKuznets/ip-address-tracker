import { Box, Stack, Typography } from "@mui/material";
import axios from "axios";
import { useQuery } from "react-query";

const SearchResult = () => {
    const getData = () => axios.get("http://localhost:3000/data");
    const { data, isLoading, error } = useQuery({
        queryKey: ["ipdata"],
        queryFn: () => getData(),
    });
    if (isLoading) return "Loading...";
    if (error instanceof Error) return "An error has occurred: " + error.message;
    console.log(data?.data);
    const searchResult = [];
   
    return <Stack></Stack>;
};

export default SearchResult;
