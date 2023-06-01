import { useEffect, useState } from "react";
import { LightMode, DarkMode, Thermostat } from "@mui/icons-material";
import { Avatar, Box, IconButton } from "@mui/material";
import { getCity, getWeather } from "../util/Api";
import { setTheme } from "../util/Function";

export default function NameCard(props: any) {
    const { auth } = props;

    const [temp, setTemp] = useState<any>(undefined);
    const [city, setCity] = useState<any>(undefined);

    useEffect(() => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                getWeather(position?.coords?.latitude, position?.coords?.longitude).then((res) => {
                    setTemp(res);
                });
                getCity(position?.coords?.latitude, position?.coords?.longitude).then((res) => {
                    setCity(res);
                });
            });
        }
    }, []);

    return (
        <>
            <Box className="flex flex-row justify-between items-center py-5">
                <Box>
                    <Avatar alt="Remy Sharp" src={auth.image} className="w-20 h-20 border border-primary-dark" />
                </Box>
                <Box className="flex flex-col gap-1 text-primary-dark dark:text-primary-light">
                    <Box className="text-xl">
                        Hi, <span className="font-semibold">{auth?.name}</span>
                    </Box>
                    <Box className="flex justify-between items-center gap-5">
                        {city ? (
                            <Box>
                                <span className="bg-secondary-blue px-2 rounded text-sm font-semibold text-primary-light">{city}</span>
                            </Box>
                        ) : null}
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
                    <IconButton size="small" className="block dark:hidden" onClick={() => setTheme("dark")}>
                        <LightMode className="text-3xl text-primary-dark" />
                    </IconButton>
                    <IconButton size="small" className="hidden dark:block" onClick={() => setTheme("light")}>
                        <DarkMode className="text-3xl text-primary-light" />
                    </IconButton>
                </Box>
            </Box>
        </>
    )
}