import { Box } from "@mui/material";
import { FiberManualRecord } from "@mui/icons-material";
import { getLight } from "../util/Function";

export default function Agenda(props: any) {
    const { schedule } = props;

    const light = getLight();

    return (
        <>
            <Box className="py-3">
                <Box className="flex flex-col">
                    <Box>
                        <span className="bg-secondary-blue px-2 py-1 rounded-t text-sm font-semibold text-primary-light">{schedule?.time}</span>
                    </Box>
                    <Box className="p-2 border-secondary-blue border-2 rounded-r-lg rounded-bl-lg">
                        <Box className={"font-semibold pb-2 " + (light ? "text-primary-dark" : "text-primary-light")}>
                            {schedule?.title}
                        </Box>
                        <Box>
                            {schedule?.task?.map((d: any, i: number) => (
                                <Box key={i}>
                                    <Box className="flex items-start">
                                        <Box>
                                            <FiberManualRecord className={"text-base p-1 " + (light ? "text-primary-dark" : "text-primary-light")} />
                                        </Box>
                                        <Box className={"" + (light ? "text-primary-dark" : "text-primary-light")}>
                                            {d}
                                        </Box>
                                    </Box>
                                </Box>
                            ))}
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
}