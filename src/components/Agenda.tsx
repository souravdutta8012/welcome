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
                    <Box className="py-2 px-3 border-secondary-blue border-2 rounded-b-lg rounded-tr-lg">
                        <Box className={"font-semibold pb-2 " + (light ? "text-primary-dark" : "text-primary-light")}>
                            {schedule?.title}
                        </Box>
                        <Box className="pl-2">
                            {schedule?.task?.map((d: any, i: number) => (
                                <Box key={i}>
                                    <Box className="flex items-start gap-1">
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