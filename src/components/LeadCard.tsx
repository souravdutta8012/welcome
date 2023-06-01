import { useState } from "react";
import { Avatar, Box } from "@mui/material";
import { LinkedIn, ReadMore } from "@mui/icons-material";
import CommonDialog from "./CommonDialog";

export default function LeadCard(props: any) {
    const { data, more } = props;

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
                        <Box className="text-lg font-semibold text-secondary-purple dark:text-primary-light">
                            {data?.name}
                        </Box>
                        <Box className="text-secondary-blue">
                            <a rel="noopener noreferrer" target="_blank" href={data?.linkedin}>
                                <LinkedIn className="text-3xl" />
                            </a>
                        </Box>
                    </Box>
                    <div onClick={() => openDialog('leadinfo', data)}>
                        <Box className="flex justify-between items-center gap-2">
                            <Box className="text-sm text-primary-dark dark:text-primary-light">
                                {data?.tag}
                            </Box>
                            {more ? (
                                <Box className="text-primary-dark dark:text-primary-light">
                                    <ReadMore className="text-3xl" />
                                </Box>
                            ) : null}
                        </Box>
                    </div>
                </Box>
            </Box>
            <CommonDialog open={open} setopen={setopen} data={value} meta={meta} />
        </>
    )
}