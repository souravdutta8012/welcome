import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import Calender from "./Calender";
import { Day1, Day2 } from "../Constant";

export default function Day(props: any) {
    const { date } = props;

    const [dated, setdated] = useState(date);
    const [dateinfo, setdateinfo] = useState<any>([]);

    useEffect(() => {
        if (date === 15) {
            setdateinfo(Day1);
        } else {
            setdateinfo(Day2);
        }
    }, [])

    return (
        <>
            <Box className="px-6">
                <Calender
                    dated={dated} setdated={setdated}
                    setdateinfo={setdateinfo}
                />
                {dateinfo?.map((t: any, i: number) => (
                    <Box key={i}>
                        {t?.time}
                    </Box>
                ))}
            </Box>
        </>
    )
}