import { Box } from "@mui/material";
import Calender from "./Calender";

export default function Day(props: any) {
    const { date } = props;

    return (
        <>
            <Box className="px-6">
                <Calender date={date} />
            </Box>
        </>
    )
}