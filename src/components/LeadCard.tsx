import { Avatar, Box } from "@mui/material";
import { KeyboardArrowRight, LinkedIn } from "@mui/icons-material";

export default function LeadCard(props: any) {
    const { data, light } = props;

    return (
        <>
            <Box className="flex items-center gap-5 py-6">
                <Box>
                    <Avatar alt="Remy Sharp" src={data?.image} className="w-20 h-20 border border-primary-dark" />
                </Box>
                <Box className="flex flex-col gap-4 grow">
                    <Box className="flex justify-between items-center gap-2">
                        <Box className={"text-lg font-semibold " + (light ? "text-secondary-purple" : "text-primary-light")}>
                            {data?.name}
                        </Box>
                        <Box className="text-secondary-blue">
                            <a rel="noopener noreferrer" target="_blank" href={data?.linkedin}>
                                <LinkedIn />
                            </a>
                        </Box>
                    </Box>
                    <Box className="flex justify-between items-center gap-2">
                        <Box className={"text-sm " + (light ? "text-primary-dark" : "text-primary-light")}>
                            {data?.tag}
                        </Box>
                        <Box className={" " + (light ? "text-primary-dark" : "text-primary-light")}>
                            <KeyboardArrowRight />
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
}