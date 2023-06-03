import { useState, useEffect } from "react";
import { Box } from "@mui/material";

export default function Orientation() {
    const [compatibility, setCompatibility] = useState<boolean>(true);

    useEffect(() => {
        if (navigator.userAgent.match(/Windows/i)
            || navigator.userAgent.match(/Macintosh/i)) {
            setCompatibility(false);
        } else {
            setCompatibility(true);
        }
    }, []);

    return (
        <>
            <Box className="absolute w-full h-full bg-primary-gray">
                <Box className="flex flex-col justify-center items-center w-full h-full gap-5">
                    {compatibility ? (
                        <>
                            <Box>
                                <img src={'/tilt.gif'} className="h-32" />
                            </Box>
                            <Box className="font-semibold text-xl">
                                Please rotate your phone to portrait mode
                            </Box>
                        </>
                    ) : (
                        <>
                            <Box>
                                <img src={'/mobile.png'} className="h-32" />
                            </Box>
                            <Box className="font-semibold text-xl">
                                Please open this website in mobile
                            </Box>
                        </>
                    )}
                </Box>
            </Box>
        </>
    )
}