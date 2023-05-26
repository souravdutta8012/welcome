import { Box } from "@mui/material";
import Calender from "./Calender";

export default function Day2() {
    return (
        <>
            <Box className="px-6">
                <Calender day={16} />
            </Box>
        </>
    )
}