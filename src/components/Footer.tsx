import { Box } from "@mui/material";

export default function Footer() {
  return (
    <>
      <Box className="absolute bottom-0 w-full">
        <Box className="flex justify-center items-center pb-6">
          <img src="/tcs.svg" />
        </Box>
      </Box>
    </>
  );
}
