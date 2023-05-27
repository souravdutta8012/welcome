import { Avatar, Box } from "@mui/material";
import { Food, Place, Shop } from "../Constant";

export default function Activity(props: any) {
    const { location } = props;

    return (
        <>
            <Box className="pt-8 pb-10">
                <Box className="flex justify-around items-center">
                    <Box className="relative">
                        <Box className={"absolute h-full w-full flex justify-center items-center z-20 font-semibold text-primary-light rounded-full " + (location === 'pune' ? "bg-primary-blue/40" : "bg-secondary-red/50")}>
                            Explore
                        </Box>
                        <Avatar alt="Remy Sharp" src={Place.image} className="w-24 h-24 border border-primary-dark" />
                    </Box>
                    <Box className="relative">
                        <Box className={"absolute h-full w-full flex justify-center items-center z-20 font-semibold text-primary-light rounded-full " + (location === 'pune' ? "bg-primary-blue/40" : "bg-secondary-red/50")}>
                            Food
                        </Box>
                        <Avatar alt="Remy Sharp" src={Food.image} className="w-24 h-24 border border-primary-dark" />
                    </Box>
                    <Box className="relative">
                        <Box className={"absolute h-full w-full flex justify-center items-center z-20 font-semibold text-primary-light rounded-full " + (location === 'pune' ? "bg-primary-blue/40" : "bg-secondary-red/50")}>
                            Shopping
                        </Box>
                        <Avatar alt="Remy Sharp" src={Shop.image} className="w-24 h-24 border border-primary-dark" />
                    </Box>
                </Box>
            </Box>
        </>
    )
}