import { Dialog } from "@mui/material";
import { transition } from "../util/Function";
import Back from "./Back";

export default function CommonDialog(props: any) {
    const { open, setopen, light } = props;

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
            >
                hi
                <Back light={light} func={dialogClose} />
            </Dialog>
        </>
    )
}