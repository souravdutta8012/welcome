import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import Welcome from "./components/Welcome";
import Home from "./components/Home";

export const Router = (_props: any) => {
    return (
        <>
            <BrowserRouter>
                <Box>
                    <Routes>
                        <Route path="/" element={<Navigate to="/welcome" />} />
                        <Route path="/welcome/:name?" element={<Welcome />} />
                        <Route path="/welcome/home/:name?" element={<Home />} />
                    </Routes>
                </Box>
            </BrowserRouter>
        </>
    );
};
