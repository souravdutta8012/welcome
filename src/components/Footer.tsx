import { Box } from "@mui/material";

export default function Footer(props: any) {
  const { light } = props;

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
