import { Box } from "@mui/material";

export default function Orientation() {
    return (
        <>
            <Box className="absolute w-full h-full bg-primary-gray">
                <Box className="flex flex-col justify-center items-center w-full h-full gap-5">
                    <Box>
                        <img src={'/tilt.gif'} className="h-32" />
                    </Box>
                    <Box className="font-semibold text-xl">
                        Please rotate your phone to portrait mode
                    </Box>
                </Box>
            </Box>
        </>
    )
}