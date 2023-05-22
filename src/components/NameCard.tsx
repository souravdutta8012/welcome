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
            <Box className="flex flex-row justify-between items-center py-5 px-5">
                <Box>
                    <Avatar alt="Remy Sharp" src={auth.image} className="w-20 h-20" />
                </Box>
                <Box className="flex flex-col gap-1 text-white">
                    <Box className="text-xl">
                        <span className="font-light">Hi, </span>{auth?.name}
                    </Box>
                    <Box className="flex justify-between items-center">
                        <Box>
                            <span className="bg-blue-500 px-2 rounded text-sm font-semibold">PUNE</span>
                        </Box>
                        <Box className="flex flex-row justify-center items-center">
                            <Box>
                                <Thermostat />
                            </Box>
                            <Box>
                                {temp}
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box className="flex justify-center items-center">
                    {light ? (
                        <IconButton size="small" onClick={() => setTheme("dark")}>
                            <LightMode className="text-3xl text-black" />
                        </IconButton>
                    ) : (
                        <IconButton size="small" onClick={() => setTheme("light")}>
                            <DarkMode className="text-3xl text-white" />
                        </IconButton>
                    )}
                </Box>
            </Box>
        </>
    )
}