import { Box } from "@mui/material";
import { getLight } from "../util/Function";
import React from "react";
import { Content } from "./Content";
const obj = [14, 15, 16, 17, 18];
export const Calendar = ({ day }: any) => {
    const [isShow, setIsShow] = React.useState(true);
    const [date, setDate] = React.useState(15);
    const onClickHandler = (date: any) => {
        setIsShow(true);
        setDate(date);
    };
    const light = getLight();
    return (
        <>
            <Box className={light ? "Backdrop-light" : "Backdrop"}></Box>
            <Box className="Grad1"></Box>
            <Box className="Grad2 overflow-clip"></Box>
            <Box className=" flex justify-center items-center  py-8">
                {obj.map((item: any) => {
                    return (
                        <>
                            <Box
                                className="w-20 h-20 border border-solid border-red-50 bg-green flex flex-col justify-center items-center"
                                onClick={() => onClickHandler(item)}
                            >
                                <Box className="text-4xl font-bold text-white">{item}</Box>
                                <Box className="text-2xl font-bold text-white">JUN</Box>
                            </Box>
                        </>
                    );
                })}
            </Box>
            {isShow && (date === 15 || date === 16) ? <Content day={day} /> : null}
        </>
    );
};
