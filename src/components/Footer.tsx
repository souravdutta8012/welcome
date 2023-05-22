import { AppBar, Box, Toolbar } from "@mui/material";

export default function Footer() {
  return (
    <>
      <Box className="absolute bottom-0 w-full">
        <Box className="bg-transparent flex justify-center items-center py-6">
          <img src="./tcs.svg" />
        </Box>
      </Box>
    </>
  );
}
