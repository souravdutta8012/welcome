import { useState, useEffect } from "react";
import { Box, Dialog } from "@mui/material";
import { getLight, transition } from "../util/Function";
import Lead from "./Lead";
import LeadDetails from "./LeadDetails";
import Office from "./Office";
import Back from "./Back";

export default function CommonDialog(props: any) {
    const { open, setopen, data, meta } = props;

    const light = getLight();

    const [height, setHeight] = useState(window.innerHeight - 125);

    useEffect(() => {
        const handleWindowResize = () => setHeight(window.innerHeight - 125);
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    const dialogClose = () => {
        setopen(false);
    };

    return (
        <>
            <Dialog
                open={open}
                onClose={dialogClose}
                fullWidth
                fullScreen
                TransitionComponent={transition}
                hideBackdrop
                PaperProps={{
                    sx: {
                        maxHeight: height,
                        position: 'absolute',
                        bottom: 0,
                        borderRadius: '20px 20px 0 0',
                        backgroundColor: `${(light ? "#F2F2F2" : "#1E2323")}`
                    }
                }}
            >
                {data === 'day1' ? (
                    <Box />
                ) : null}
                {data === 'day2' ? (
                    <Box />
                ) : null}
                {data === 'contact' ? (
                    <Lead />
                ) : null}
                {data === 'leadinfo' ? (
                    <LeadDetails meta={meta} />
                ) : null}
                {data === 'office' ? (
                    <Office />
                ) : null}
                <Back func={dialogClose} />
            </Dialog>
        </>
    )
}