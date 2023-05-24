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
                PaperProps={{
                    sx: {
                        maxHeight: '80vh',
                        position: 'absolute',
                        bottom: 0,
                        borderRadius: '20px'
                    }
                }}
            >
                <Back light={light} func={dialogClose} />
            </Dialog>
        </>
    )
}