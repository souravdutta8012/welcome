import { AppBar, Box, Toolbar } from "@mui/material";

export default function Header() {
    return (
        <>
            <AppBar>
                <Toolbar variant="dense" className="bg-primary p-0">
                    <Box className="font-semibold mx-5">
                        Welcome
                    </Box>
                </Toolbar>
            </AppBar >
        </>
    )
}