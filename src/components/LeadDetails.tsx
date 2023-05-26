import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import LeadCard from "./LeadCard";
import { getLight } from "../util/Function";

export default function LeadDetails(props: any) {
    const { meta } = props;

    const [height, setHeight] = useState(window.innerHeight - 275);

    const light = getLight();

    useEffect(() => {
        const handleWindowResize = () => setHeight(window.innerHeight - 275);
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    return (
        <>
            <Box className="px-6">
                <Box className="pt-4">
                    <LeadCard data={meta} more={false} />
                    <Box className="pb-24 overflow-y-auto" sx={{ maxHeight: height }}>
                        <Box className={"whitespace-pre-line " + (light ? "text-primary-dark" : "text-primary-light")}>
                            {meta?.about}
                        </Box>
                    </Box>
                </Box>
            </Box >
        </>
    )
}