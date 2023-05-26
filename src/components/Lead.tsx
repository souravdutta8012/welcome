import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import LeadCard from "./LeadCard";
import { Leads } from "../Constant";

export default function Lead() {
    const [height, setHeight] = useState(window.innerHeight - 125);

    useEffect(() => {
        const handleWindowResize = () => setHeight(window.innerHeight - 125);
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    return (
        <>
            <Box className="px-6">
                <Box className="pt-4 pb-20 overflow-y-auto" sx={{ maxHeight: height }}>
                    {Leads?.map((item: any, i: number) => <LeadCard key={i} data={item} more={true} />)}
                </Box>
            </Box>
        </>
    )
}