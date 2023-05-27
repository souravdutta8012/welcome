import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import ActivityCard from "./ActivityCard";
import { FoodData } from "../Constant";

export default function Food(props: any) {
    const { data } = props;

    const [height, setHeight] = useState(window.innerHeight - 125);

    useEffect(() => {
        const handleWindowResize = () => setHeight(window.innerHeight - 125);
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    return (
        <>
            <Box className="px-6">
                {data?.includes('pune') ? (
                    <Box className="pt-4 pb-20 overflow-y-auto" sx={{ maxHeight: height }}>
                        {FoodData?.pune?.map((p: any, i: number) => <ActivityCard key={i} data={p} />)}
                    </Box>
                ) : (
                    <Box className="pt-4 pb-20 overflow-y-auto" sx={{ maxHeight: height }}>
                        {FoodData?.bangalore?.map((p: any, i: number) => <ActivityCard key={i} data={p} />)}
                    </Box>
                )}
            </Box>
        </>
    )
}