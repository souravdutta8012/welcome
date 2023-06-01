import { forwardRef } from "react";
import { Slide } from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";

export const getName = () => {
    return localStorage.getItem('name') || "";
};

export const getLight = () => {
    return localStorage.getItem('theme') === 'light';
};

export const setTheme = (value: string) => {
    const root: HTMLElement = window.document.documentElement;
    root.removeAttribute("class");
    root.classList.add(value);
    localStorage.setItem('theme', value);
};

export const transition = forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
})