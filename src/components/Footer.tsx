import { Box } from "@mui/material";

export default function Footer() {

  return (
    <>
      <Box className="flex justify-center items-center py-6">
        <img src="/tcs-light.svg" className="block dark:hidden" />
        <img src="/tcs-dark.svg" className="hidden dark:block" />
      </Box>
    </>
  );
}
