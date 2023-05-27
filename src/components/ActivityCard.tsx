import { Box, Button } from "@mui/material";
import { LocationOn } from "@mui/icons-material";
import { getLight } from "../util/Function";

export default function ActivityCard(props: any) {
    const { data } = props;

    const light = getLight();

    return (
        <>
            <Box className="flex flex-col gap-2 py-6">
                <Box className={"text-2xl font-semibold " + (light ? "text-secondary-purple" : "text-primary-light")}>
                    {data?.name}
                </Box>
                <Box>
                    <Box className="relative">
                        <img src={data?.image} />
                        <Box className="absolute bottom-2 right-2">
                            <a rel="noopener noreferrer" target="_blank" href={data?.map}>
                                <Button className="capitalize bg-secondary-blue rounded-md" size="small" variant="contained" >
                                    <LocationOn className="text-sm mr-1 mb-1" />
                                    Map
                                </Button>
                            </a>
                        </Box>
                    </Box>
                </Box>
                <Box className={"" + (light ? "text-primary-dark" : "text-primary-gray")}>
                    {data?.details}
                </Box>
            </Box >
        </>
    )
}