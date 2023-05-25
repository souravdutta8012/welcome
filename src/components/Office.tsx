import { useState, useEffect } from "react";
import { Box, Button } from "@mui/material";
import { LocationOn } from "@mui/icons-material";
import { getLight } from "../util/Function";
import { Pune } from "../Constant";

export default function Office() {
    const [height, setHeight] = useState(window.innerHeight - 215);

    const light = getLight();

    useEffect(() => {
        const handleWindowResize = () => setHeight(window.innerHeight - 215);
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    return (
        <>
            <Box className="px-6">
                <Box className="flex justify-between items-end py-6">
                    <Box className={"text-4xl " + (light ? "text-secondary-purple" : "text-primary-light")}>
                        Pune
                    </Box>
                    <Box>
                        <a rel="noopener noreferrer" target="_blank" href="https://goo.gl/maps/nci2ZWG7fevgwGuD9?coh=178571&entry=tt">
                            <Button className="capitalize bg-secondary-blue" size="small" variant="contained" startIcon={<LocationOn className="pb-1" />}>
                                Map
                            </Button>
                        </a>
                    </Box>
                </Box>
                <Box className="overflow-y-auto" sx={{ maxHeight: height }}>
                    <Box className={"pb-6 whitespace-pre-line " + (light ? "text-primary-dark" : "text-primary-light")}>
                        {Pune?.about}
                    </Box>
                </Box>
            </Box>
        </>
    )
}