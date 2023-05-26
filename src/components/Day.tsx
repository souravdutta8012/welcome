import { useState } from "react";
import { Box } from "@mui/material";
import Calender from "./Calender";

export default function Day(props: any) {
    const { date } = props;

    const [dated, setdated] = useState(date);

    return (
        <>
            <Box className="px-6">
                <Calender dated={dated} setdated={setdated} />
            </Box>
        </>
    )
}