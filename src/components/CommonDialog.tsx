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
                        maxHeight: '85vh',
                        position: 'absolute',
                        bottom: 0,
                        borderRadius: '20px 20px 0 0',
                        backgroundColor: `${(light ? "#F2F2F2" : "#1E2323")}`
                    }
                }}
            >
                <Back light={light} func={dialogClose} />
            </Dialog>
        </>
    )
}