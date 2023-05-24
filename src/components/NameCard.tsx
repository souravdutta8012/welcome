import { useEffect, useState } from "react";
import { LightMode, DarkMode, Thermostat } from "@mui/icons-material";
import { Avatar, Box, IconButton } from "@mui/material";
import { getLight, setTheme } from "../util/Function";
import { getWeather } from "../util/Api";

export default function NameCard(props: any) {
    const { auth } = props;
    const light = getLight();

    const [temp, setTemp] = useState<any>(undefined);

    useEffect(() => {
        getWeather().then((res) => {
            setTemp(res);
        });
    }, [])

    return (
        <>
            <Box className="flex flex-row justify-between items-center py-5">
                <Box>
                    <Avatar alt="Remy Sharp" src={auth.image} className="w-20 h-20 border border-primary-dark" />
                </Box>
                <Box className={"flex flex-col gap-1 " + (light ? "text-primary-dark" : "text-primary-light")}>
                    <Box className="text-xl">
                        Hi, <span className="font-semibold">{auth?.name}</span>
                    </Box>
                    <Box className="flex justify-between items-center gap-5">
                        <Box>
                            <span className="bg-secondary-blue px-2 rounded text-sm font-semibold text-primary-light">PUNE</span>
                        </Box>
                        {temp ? (
                            <Box className="flex flex-row justify-center items-center">
                                <Box>
                                    <Thermostat />
                                </Box>
                                <Box>
                                    {temp}
                                </Box>
                            </Box>
                        ) : null}
                    </Box>
                </Box>
                <Box className="flex justify-center items-center">
                    {light ? (
                        <IconButton size="small" onClick={() => setTheme("dark")}>
                            <LightMode className="text-3xl text-primary-dark" />
                        </IconButton>
                    ) : (
                        <IconButton size="small" onClick={() => setTheme("light")}>
                            <DarkMode className="text-3xl text-primary-light" />
                        </IconButton>
                    )}
                </Box>
            </Box>
        </>
    )
}