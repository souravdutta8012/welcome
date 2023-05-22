import { Box } from "@mui/material";
import { useUserState } from "../util/User";
import { getLight } from "../util/Function";
import NameCard from "./NameCard";

export default function Home() {
    const { auth } = useUserState();
    const light = getLight();

    return (
        <>
            <Box className={light ? "Backdrop-light" : "Backdrop"}></Box>
            <Box className="Grad1"></Box>
            <Box className="Grad2 overflow-clip"></Box>
            <NameCard auth={auth} />
        </>
    )
}