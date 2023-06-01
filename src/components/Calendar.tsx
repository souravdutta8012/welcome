import { useEffect, useState } from "react";
import { Badge, Box } from "@mui/material";
import { toast } from "react-toastify";
import { Day1, Day2 } from "../Constant";

export default function Calendar(props: any) {
    const { dated, setdated, setdateinfo } = props;

    const [debounce, setDebounce] = useState<any>(false);
    const [cooldown, setCooldown] = useState(false);

    const dates = [14, 15, 16, 17, 18];

    const changeDate = (date: any) => {
        if (date === 15) {
            setdateinfo([]);
            setTimeout(() => {
                setdateinfo(Day1);
            }, 0);
        } else {
            setdateinfo([]);
            setTimeout(() => {
                setdateinfo(Day2);
            }, 0);
        }
        setdated(date);
    };

    useEffect(() => {
        if (debounce) {
            setCooldown(true);
            let timeout = setTimeout(() => {
                setCooldown(false);
                setDebounce(false);
            }, 3300);
            return () => {
                clearTimeout(timeout);
            };
        }
    }, [debounce]);

    const warn = () => {
        if (!cooldown) {
            toast.info('No event on this day !');
            setDebounce(true);
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
                                            <Box className="text-base  font-bold text-primary-dark dark:text-primary-light">
                                                {d}
                                            </Box>
                                            <Box className="text-sm font-bold text-primary-dark dark:text-primary-light">
                                                JUN
                                            </Box>
                                        </Box>
                                    </Badge>
                                </div>
                            </>
                        ) : (
                            <>
                                <div onClick={warn}>
                                    <Box className="flex flex-col justify-center items-center">
                                        <Box className="text-base font-bold text-secondary-gray">
                                            {d}
                                        </Box>
                                        <Box className="text-sm font-bold text-secondary-gray">
                                            JUN
                                        </Box>
                                    </Box>
                                </div>
                            </>
                        )}
                    </Box>
                ))}
            </Box>
        </>
    )
}