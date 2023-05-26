import { Box } from "@mui/material";
import Calender from "./Calender";

export default function Day1() {
    return (
        <>
            <Box className="px-6">
                <Calender day={15} />
            </Box>
        </>
    )
}