import { useState, useEffect } from "react";
import { Dialog } from "@mui/material";
import { transition } from "../util/Function";
import Back from "./Back";
import { Calendar } from "./Calendar";

export default function CommonDialog(props: any) {
    const { open, setopen, light, day } = props;

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
                PaperProps={{
                    sx: {
                        maxHeight: height,
                        position: "absolute",
                        bottom: 0,
                        borderRadius: "20px 20px 0 0",
                        backgroundColor: `${light ? "#F2F2F2" : "#1E2323"}`,
                    },
                }}
            >
                <Calendar day={day} />
                <Back light={light} func={dialogClose} />
            </Dialog>
        </>
    );
}
