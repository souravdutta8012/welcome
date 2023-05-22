import * as React from "react";
import "./Welcome.css";
import Identities from "./Constant";

import { Avatar, Box, Button } from "@mui/material";

export default function Welcome() {
  return (
    <>
      <Box className="Backdrop"></Box>
      <Box className="Grad1"></Box>
      <Box className="Grad2 overflow-clip"></Box>
      <Box className="flex flex-col justify-between">
        <Box className="flex flex-col px-4 pt-8 pb-2">
          <Box className="text-4xl font-bold text-white">Client</Box>
          <Box className="text-4xl font-bold text-white">On-boarding</Box>
          <Box className="text-4xl font-bold text-secondary">Application</Box>
        </Box>
        <Box
          className="flex flex-col justify-center items-center text-center gap-5"
          sx={{ height: "55vh" }}
        >
          <Box>
            <Avatar alt="Remy Sharp" src="./favicon.ico" className="" />
          </Box>
          <Box className="flex flex-col justify-center items-center text-center gap-1">
            <Box className="text-3xl font-semibold text-white">
              {Identities[0].name}
            </Box>
            <Box className="text-xl font-light text-white">Welcome to</Box>
            <Box className="text-5xl font-bold text-white">PUNE</Box>
          </Box>
        </Box>
        <Box className="flex flex-col justify-center items-center py-4">
          <Button variant="contained" className="w-11/12" size="large">
            Next
          </Button>
        </Box>
      </Box>
    </>
  );
}
