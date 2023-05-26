import { Box } from "@mui/material";
import { getLight } from "../util/Function";

export default function Footer() {
  const light = getLight();

  return (
    <>
      <Box className="flex justify-center items-center py-6">
        {light ? (
          <img src="/tcs-light.svg" />
        ) : (
          <img src="/tcs-dark.svg" />
        )}
      </Box>
    </>
  );
}
