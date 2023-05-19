import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { Box } from "@mui/material";
import Header from "./components/Header";
import Welcome from "./components/Welcome";

export const Router = (_props: any) => {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Box>
                    <Routes>
                        <Route path="/" element={<Navigate to="/welcome" />} />
                        <Route path="/welcome" element={<Welcome />} />
                    </Routes>
                </Box>
            </BrowserRouter>
        </>
    )
}
