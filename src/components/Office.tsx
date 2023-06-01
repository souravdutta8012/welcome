import { useState, useEffect } from "react";
import { Box, Button } from "@mui/material";
import { LocationOn } from "@mui/icons-material";
import { getLight } from "../util/Function";
import { OfficeData } from "../Constant";

export default function Office() {
    const [height, setHeight] = useState(window.innerHeight - 360);

    const light = getLight();

    useEffect(() => {
        const handleWindowResize = () => setHeight(window.innerHeight - 360);
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    return (
        <>
            <Box className="px-6">
                <Box className="flex flex-col gap-4 pt-10">
                    <Box className={"text-2xl font-semibold " + (light ? "text-secondary-purple" : "text-primary-light")}>
                        {OfficeData?.name}
                    </Box>
                    <Box>
                        <Box className="relative">
                            <img src={OfficeData?.image} className="aspect-auto w-full object-fill rounded-lg" />
                            {OfficeData?.map ? (
                                <Box className="absolute bottom-2 right-2">
                                    <a rel="noopener noreferrer" target="_blank" href={OfficeData?.map}>
                                        <Button className="capitalize bg-secondary-blue rounded-md" size="small" variant="contained" >
                                            <LocationOn className="text-sm mr-1 mb-1" />
                                            Map
                                        </Button>
                                    </a>
                                </Box>
                            ) : null}
                        </Box>
                    </Box>
                    <Box className="overflow-y-auto" sx={{ maxHeight: height }}>
                        <Box className={"pb-24 whitespace-pre-line " + (light ? "text-primary-dark" : "text-primary-gray")}>
                            {OfficeData?.details}
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
}