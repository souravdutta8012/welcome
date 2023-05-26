import { Box, Button } from "@mui/material";
import { getLight } from "../util/Function";

export default function Back(props: any) {
    const { func } = props;

    const light = getLight();

    return (
        <>
            <Box className={"absolute bottom-0 w-full px-6 pb-5 bg-gradient-to-t " + (light ? "from-primary-light" : "from-primary-dark")}>
                <Button
                    variant="contained"
                    className={"w-full h-14 font-semibold text-xl capitalize rounded-lg bg-gradient-to-r " + (light ? "from-secondary-purple to-primary-pink" : "from-secondary-blue to-secondary-purple")} size="large"
                    onClick={func}>
                    Back
                </Button>
            </Box>
        </>
    );
}