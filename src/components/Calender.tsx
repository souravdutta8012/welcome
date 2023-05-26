import { Badge, Box } from "@mui/material";
import { getLight } from "../util/Function";
import { Day1, Day2 } from "../Constant";

export default function Calender(props: any) {
    const { dated, setdated, setdateinfo } = props;
    const dates = [14, 15, 16, 17, 18];

    const light = getLight();

    const changeDate = (date: any) => {
        setdated(date);
        if (date === 15) {
            setdateinfo(Day1);
        } else {
            setdateinfo(Day2);
        }
    };

    return (
        <>
            <Box className="flex justify-between items-center py-6">
                {dates?.map((d: any, i: number) => (
                    <Box key={i}>
                        {(d === dated) ? (
                            <>
                                <Badge variant="dot" classes={{ badge: 'bg-primary-pink' }}>
                                    <Box className="flex flex-col justify-center items-center">
                                        <Box className="text-3xl font-bold text-secondary-blue">
                                            {d}
                                        </Box>
                                        <Box className="text-xl font-bold text-secondary-blue">
                                            JUN
                                        </Box>
                                    </Box>
                                </Badge>
                            </>
                        ) : (d === 15 || d === 16) ? (
                            <>
                                <div onClick={() => changeDate(d)}>
                                    <Badge variant="dot" classes={{ badge: 'bg-primary-pink' }}>
                                        <Box className="flex flex-col justify-center items-center">
                                            <Box className={"text-base  font-bold " + (light ? "text-primary-dark" : "text-primary-light")}>
                                                {d}
                                            </Box>
                                            <Box className={"text-sm font-bold " + (light ? "text-primary-dark" : "text-primary-light")}>
                                                JUN
                                            </Box>
                                        </Box>
                                    </Badge>
                                </div>
                            </>
                        ) : (
                            <>
                                <Box className="flex flex-col justify-center items-center">
                                    <Box className="text-base font-bold text-secondary-gray">
                                        {d}
                                    </Box>
                                    <Box className="text-sm font-bold text-secondary-gray">
                                        JUN
                                    </Box>
                                </Box>
                            </>
                        )}
                    </Box>
                ))}
            </Box>
        </>
    )
}