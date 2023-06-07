import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Dialog } from "@mui/material";
import { transition } from "../util/Function";
import Day from "./Day";
import Lead from "./Lead";
import LeadDetails from "./LeadDetails";
import Office from "./Office";
import Explore from "./Explore";
import Food from "./Food";
import Shop from "./Shop";
import Back from "./Back";

export default function CommonDialog(props: any) {
    const { open, setopen, data, meta } = props;

    const navigate = useNavigate();
    const { dialogtype } = useParams();

    const [height, setHeight] = useState(window.innerHeight - 120);

    useEffect(() => {
        const handleWindowResize = () => setHeight(window.innerHeight - 120);
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    useEffect(() => {
        if (!dialogtype) {
            setopen(false);
            navigate('/welcome/home', { replace: true });
        }
    }, [dialogtype]);

    const dialogClose = () => {
        setopen(false);
        if (data !== 'leadinfo') {
            navigate('/welcome/home', { replace: true });
        }
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
                classes={{ paper: 'bg-primary-light dark:bg-primary-dark' }}
                PaperProps={{
                    sx: {
                        maxHeight: height,
                        position: 'absolute',
                        bottom: 0,
                        borderRadius: '20px 20px 0 0'
                    },
                }}
            >
                {data === 'day1' ? (
                    <Day date={15} />
                ) : null}
                {data === 'day2' ? (
                    <Day date={16} />
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
                {data?.includes('explore') ? (
                    <Explore data={data} />
                ) : null}
                {data?.includes('food') ? (
                    <Food data={data} />
                ) : null}
                {data?.includes('shop') ? (
                    <Shop data={data} />
                ) : null}
                <Back func={dialogClose} />
            </Dialog>
        </>
    )
}