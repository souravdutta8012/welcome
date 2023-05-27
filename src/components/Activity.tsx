import { useState } from "react";
import { Avatar, Box } from "@mui/material";
import CommonDialog from "./CommonDialog";
import { ExploreData, FoodData, ShopData } from "../Constant";

export default function Activity(props: any) {
    const { location } = props;

    const [open, setopen] = useState(false);
    const [value, setvalue] = useState(undefined);

    const openDialog = (value: any) => {
        setopen(true);
        setvalue(value);
    };

    return (
        <>
            <Box className="pt-8 pb-10">
                <Box className="flex justify-around items-center">
                    <div onClick={() => openDialog(('explore ' + location))}>
                        <Box className="relative">
                            <Box className={"absolute h-full w-full flex justify-center items-center z-20 font-semibold text-primary-light rounded-full " + (location === 'pune' ? "bg-primary-blue/40" : "bg-secondary-red/50")}>
                                Explore
                            </Box>
                            <Avatar alt="Remy Sharp" src={ExploreData.image} className="w-24 h-24 border border-primary-dark" />
                        </Box>
                    </div>
                    <div onClick={() => openDialog(('food ' + location))}>
                        <Box className="relative">
                            <Box className={"absolute h-full w-full flex justify-center items-center z-20 font-semibold text-primary-light rounded-full " + (location === 'pune' ? "bg-primary-blue/40" : "bg-secondary-red/50")}>
                                Food
                            </Box>
                            <Avatar alt="Remy Sharp" src={FoodData.image} className="w-24 h-24 border border-primary-dark" />
                        </Box>
                    </div>
                    <div onClick={() => openDialog(('shop ' + location))}>
                        <Box className="relative">
                            <Box className={"absolute h-full w-full flex justify-center items-center z-20 font-semibold text-primary-light rounded-full " + (location === 'pune' ? "bg-primary-blue/40" : "bg-secondary-red/50")}>
                                Shopping
                            </Box>
                            <Avatar alt="Remy Sharp" src={ShopData.image} className="w-24 h-24 border border-primary-dark" />
                        </Box>
                    </div>
                </Box>
            </Box>
            <CommonDialog open={open} setopen={setopen} data={value} />
        </>
    )
}