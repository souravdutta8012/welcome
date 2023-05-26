import { useState } from "react";
import { Avatar, Box } from "@mui/material";
import { LinkedIn, ReadMore } from "@mui/icons-material";
import CommonDialog from "./CommonDialog";
import { getLight } from "../util/Function";

export default function LeadCard(props: any) {
    const { data, more } = props;

    const light = getLight();

    const [open, setopen] = useState(false);
    const [value, setvalue] = useState(undefined);
    const [meta, setmeta] = useState(undefined);

    const openDialog = (value: any, data: any) => {
        setopen(true);
        setvalue(value);
        setmeta(data);
    };

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
                                <LinkedIn className="text-3xl" />
                            </a>
                        </Box>
                    </Box>
                    <Box className="flex justify-between items-center gap-2">
                        <Box className={"text-sm " + (light ? "text-primary-dark" : "text-primary-light")}>
                            {data?.tag}
                        </Box>
                        {more ? (
                            <div onClick={() => openDialog('leadinfo', data)}>
                                <Box className={" " + (light ? "text-primary-dark" : "text-primary-light")}>
                                    <ReadMore className="text-3xl" />
                                </Box>
                            </div>
                        ) : null}
                    </Box>
                </Box>
            </Box>
            <CommonDialog open={open} setopen={setopen} data={value} meta={meta} />
        </>
    )
}