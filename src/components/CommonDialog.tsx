import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Dialog } from "@mui/material";
import { getLight, transition } from "../util/Function";
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

    const light = getLight();
    const navigate = useNavigate();
    const { name, dialogtype } = useParams();

    const [height, setHeight] = useState(window.innerHeight - 125);

    useEffect(() => {
        const handleWindowResize = () => setHeight(window.innerHeight - 125);
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    useEffect(() => {
        if (!dialogtype) {
            setopen(false);
            navigate('/welcome/home/' + name, { replace: true });
        }
    }, [dialogtype]);

    const dialogClose = () => {
        setopen(false);
        if (data !== 'leadinfo') {
            navigate('/welcome/home/' + name, { replace: true });
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