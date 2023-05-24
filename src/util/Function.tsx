import { forwardRef } from "react";
import { Slide } from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";

export const getLight = () => {
    return localStorage.getItem('theme') === 'light';
};

export const setTheme = (value: string) => {
    localStorage.setItem('theme', value);
    window.location.reload();
};

export const transition = forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
})