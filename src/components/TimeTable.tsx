import { Box } from "@mui/material";

export const TimeTable = ({ time }: any) => {
  return (
    <Box className="bg-secondary-blue w-24 text-white h-15 text-center text-2xl">
      {time}
    </Box>
  );
};
