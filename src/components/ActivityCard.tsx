import { Box, Button } from "@mui/material";
import { LocationOn } from "@mui/icons-material";

export default function ActivityCard(props: any) {
    const { data } = props;

    return (
        <>
            <Box className="flex flex-col gap-2 py-6">
                <Box className="text-2xl font-semibold text-secondary-purple dark:text-primary-light">
                    {data?.name}
                </Box>
                <Box>
                    <Box className="relative">
                        <img src={data?.image} className="aspect-auto w-full object-fill rounded-lg" />
                        {data?.map ? (
                            <Box className="absolute bottom-2 right-2">
                                <a rel="noopener noreferrer" target="_blank" href={data?.map}>
                                    <Button className="capitalize bg-secondary-blue rounded-md" size="small" variant="contained" >
                                        <LocationOn className="text-sm mr-1 mb-1" />
                                        Map
                                    </Button>
                                </a>
                            </Box>
                        ) : null}
                    </Box>
                </Box>
                <Box className="text-primary-dark dark:text-primary-gray">
                    {data?.details}
                </Box>
            </Box >
        </>
    )
}