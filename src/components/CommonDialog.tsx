import { useState, useEffect } from "react";
import { Box, Dialog } from "@mui/material";
import { transition } from "../util/Function";
import Office from "./Office";
import Back from "./Back";

export default function CommonDialog(props: any) {
    const { open, setopen, value, setvalue, light } = props;

    const [height, setHeight] = useState(window.innerHeight - 125);

    useEffect(() => {
        const handleWindowResize = () => setHeight(window.innerHeight - 125);
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    const dialogClose = () => {
        setopen(false);
        setvalue(undefined);
    };

    return (
        <>
            <Dialog
                open={open}
                onClose={dialogClose}
                fullWidth
                fullScreen
                TransitionComponent={transition}
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
                {value === 'day1' ? (
                    <Box />
                ) : null}
                {value === 'day2' ? (
                    <Box />
                ) : null}
                {value === 'contact' ? (
                    <Box />
                ) : null}
                {value === 'office' ? (
                    <Office />
                ) : null}
                <Back light={light} func={dialogClose} />
            </Dialog>
        </>
    )
}