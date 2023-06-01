import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import LeadCard from "./LeadCard";

export default function LeadDetails(props: any) {
    const { meta } = props;

    const [height, setHeight] = useState(window.innerHeight - 275);

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
                        <Box className="whitespace-pre-line text-primary-dark dark:text-primary-light">
                            {meta?.about}
                        </Box>
                    </Box>
                </Box>
            </Box >
        </>
    )
}