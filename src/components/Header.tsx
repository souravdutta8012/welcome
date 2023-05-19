import { AppBar, Box, Toolbar } from "@mui/material";

export default function Header() {
    return (
        <>
            <AppBar position="sticky">
                <Toolbar variant="dense" className="bg-primary p-0">
                    <Box className="font-semibold mx-5">
                        <Box className="flex items-center gap-5">
                            <img src="favicon.ico" className="w-8" />
                            Welcome
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar >
        </>
    )
}