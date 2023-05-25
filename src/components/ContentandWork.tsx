import { Box } from "@mui/material";

export const ContentandWork = ({ heading }: any) => {
    return (
        <>
            <Box className="flex flex-col ">
                <Box className="text-white text-4xl">{heading}</Box>
                <Box className="text-white text-2xl py-4">
                    {heading === "Project Update" ? (
                        <>
                            <ul className="">
                                <li>Discuss project updates, goals, and challenges.</li>
                                <li>Assign tasks and responsibilities for the day.</li>
                                <li>Review any pending issues or concerns.</li>
                            </ul>
                        </>
                    ) : null}
                    {heading === "Departmental Presentation" ? (
                        <>
                            <ul className="">
                                <li>
                                    A presentation by a department head or team to share insights,
                                    achievements, and future plans.
                                </li>
                                <li>Q&A session to address any queries or suggestions.</li>
                            </ul>
                        </>
                    ) : null}
                    {heading === "Client Meeting" ? (
                        <>
                            <ul className="">
                                <li>
                                    Meet with a client to discuss project progress, feedback, and
                                    any upcoming requirements.
                                </li>
                                <li>
                                    Present proposals, if applicable, and seek client approval.
                                </li>
                            </ul>
                        </>
                    ) : null}
                </Box>
            </Box>
        </>
    );
};
