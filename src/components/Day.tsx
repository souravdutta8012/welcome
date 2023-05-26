import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import Calender from "./Calender";
import Agenda from "./Agenda";
import { Day1, Day2 } from "../Constant";

export default function Day(props: any) {
    const { date } = props;

    const [dated, setdated] = useState(date);
    const [dateinfo, setdateinfo] = useState<any>([]);
    const [height, setHeight] = useState(window.innerHeight - 240);

    useEffect(() => {
        const handleWindowResize = () => setHeight(window.innerHeight - 240);
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

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
                <Box className="pb-20 overflow-y-auto" sx={{ maxHeight: height }}>
                    {dateinfo?.map((t: any, i: number) => (
                        <Agenda key={i} schedule={t} />
                    ))}
                </Box>
            </Box>
        </>
    )
}