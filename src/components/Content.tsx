import { Box } from "@mui/material";

import { TimeTable } from "./TimeTable";
import { ContentandWork } from "./ContentandWork";

export const Content = ({ day }: any) => {
    return (
        <>
            {day === "day1" ? (
                <>
                    <Box className="flex flex-col py-8">
                        <Box className="flex justify-center items-center w-full py-4">
                            <Box className="w-1/3">
                                <TimeTable time="9.00 AM" />
                            </Box>
                            <Box className="w-2/3">
                                <ContentandWork heading="Project Update" />
                            </Box>
                        </Box>
                        <Box className="flex justify-center items-center w-full py-4">
                            <Box className="w-1/3">
                                <TimeTable time="10.00 AM" />
                            </Box>
                            <Box className="w-2/3">
                                <ContentandWork heading="Departmental Presentation" />
                            </Box>
                        </Box>
                        <Box className="flex justify-center items-center w-full py-4">
                            <Box className="w-1/3">
                                <TimeTable time="11.00 AM" />
                            </Box>
                            <Box className="w-2/3">
                                <ContentandWork heading="Client Meeting" />
                            </Box>
                        </Box>
                        <Box className="flex justify-center items-center w-full py-4">
                            <Box className="w-1/3">
                                <TimeTable time="12.00 AM" />
                            </Box>
                            <Box className="w-2/3">
                                <ContentandWork heading="Lunch Break" />
                            </Box>
                        </Box>
                    </Box>
                </>
            ) : null}
            {day === "day2" ? (
                <>
                    <Box className="flex flex-col py-8">
                        <Box className="flex justify-center items-center w-full py-4">
                            <Box className="w-1/3">
                                <TimeTable time="9.00 AM" />
                            </Box>
                            <Box className="w-2/3">
                                <ContentandWork heading="Content Needed" />
                            </Box>
                        </Box>
                        <Box className="flex justify-center items-center w-full py-4">
                            <Box className="w-1/3">
                                <TimeTable time="10.00 AM" />
                            </Box>
                            <Box className="w-2/3">
                                <ContentandWork heading="Departmental Presentation" />
                            </Box>
                        </Box>
                        <Box className="flex justify-center items-center w-full py-4">
                            <Box className="w-1/3">
                                <TimeTable time="11.00 AM" />
                            </Box>
                            <Box className="w-2/3">
                                <ContentandWork heading="Client Meeting" />
                            </Box>
                        </Box>
                        <Box className="flex justify-center items-center w-full py-4">
                            <Box className="w-1/3">
                                <TimeTable time="12.00 AM" />
                            </Box>
                            <Box className="w-2/3">
                                <ContentandWork heading="Lunch Break" />
                            </Box>
                        </Box>
                    </Box>
                </>
            ) : null}
        </>
    );
};
