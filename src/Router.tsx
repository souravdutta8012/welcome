import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import Footer from "./components/Footer";
import Welcome from "./components/Welcome";

export const Router = (_props: any) => {
  return (
    <>
      <BrowserRouter>
        <Box>
          <Routes>
            <Route path="/" element={<Navigate to="/welcome" />} />
            <Route path="/welcome" element={<Welcome />} />
          </Routes>
          <Footer />
        </Box>
      </BrowserRouter>
    </>
  );
};
