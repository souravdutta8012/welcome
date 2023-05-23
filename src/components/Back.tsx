import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Back(props: any) {
    const { path } = props;

    const navigate = useNavigate();

    return (
        <>
            <Box className="absolute bottom-5 w-full px-6">
                <Button
                    variant="contained"
                    className="w-full h-14 font-semibold text-xl capitalize rounded-md bg-gradient-to-r from-cyan-500 to-blue-500" size="large"
                    onClick={() => { navigate(path) }}>
                    Back
                </Button>
            </Box>
        </>
    );
}