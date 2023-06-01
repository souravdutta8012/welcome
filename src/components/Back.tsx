import { Box, Button } from "@mui/material";

export default function Back(props: any) {
    const { func } = props;

    return (
        <>
            <Box className="absolute bottom-0 w-full px-6 pb-5 bg-gradient-to-t z-50 from-primary-light dark:from-primary-dark">
                <Button
                    variant="contained"
                    className="w-full h-14 font-semibold text-xl capitalize rounded-lg bg-gradient-to-r from-secondary-purple to-primary-pink dark:from-secondary-blue dark:to-secondary-purple" size="large"
                    onClick={func}>
                    Back
                </Button>
            </Box>
        </>
    );
}