import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Back(props: any) {
    const { path, light } = props;

    const navigate = useNavigate();

    return (
        <>
            <Box className="absolute bottom-5 w-full px-6">
                <Button
                    variant="contained"
                    className={"w-full h-14 font-semibold text-xl capitalize rounded-lg bg-gradient-to-r " + (light ? "from-secondary-purple to-primary-pink" : "from-secondary-blue to-secondary-purple")} size="large"
                    onClick={() => { navigate(path) }}>
                    Back
                </Button>
            </Box>
        </>
    );
}