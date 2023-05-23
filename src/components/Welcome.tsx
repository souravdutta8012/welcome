import { Avatar, Box, Button, IconButton } from "@mui/material";
import { DarkMode, LightMode } from "@mui/icons-material";
import { useUserState } from "../util/User";
import { getLight, setTheme } from "../util/Function";
import { useNavigate, useParams } from "react-router-dom";

export default function Welcome() {

  const { auth } = useUserState();
  const navigate = useNavigate();
  const { name } = useParams();
  const light = getLight();

  return (
    <>
      <Box className={light ? "Backdrop-light" : "Backdrop"}></Box>
      <Box className="Grad1"></Box>
      <Box className="Grad2 overflow-clip"></Box>
      <Box className="flex flex-col justify-between px-6">
        <Box className="flex flex-col pt-8 pb-2">
          <Box className="text-4xl font-bold text-white flex justify-between items-center">
            <Box>
              Client
            </Box>
            <Box className="flex justify-center items-center">
              {light ? (
                <IconButton size="small" onClick={() => setTheme("dark")}>
                  <LightMode className="text-3xl text-black" />
                </IconButton>
              ) : (
                <IconButton size="small" onClick={() => setTheme("light")}>
                  <DarkMode className="text-3xl text-white" />
                </IconButton>
              )}
            </Box>
          </Box>
          <Box className="text-4xl font-bold text-white">On-boarding</Box>
          <Box className="text-4xl font-bold text-secondary">Application</Box>
        </Box>
        <Box
          className="flex flex-col justify-center items-center text-center gap-10"
          sx={{ height: "55vh" }}
        >
          <Box>
            <Avatar alt="Remy Sharp" src={auth.image} className="w-36 h-36" />
          </Box>
          <Box className="flex flex-col justify-center items-center text-center gap-1">
            <Box className="text-3xl font-semibold text-white">
              {auth.name}
            </Box>
            <Box className="text-xl font-light text-white">welcome to</Box>
            <Box className="text-5xl font-bold text-white">TCS</Box>
          </Box>
        </Box>
        <Box className="flex flex-col justify-center items-center py-4">
          <Button
            variant="contained"
            className="w-full h-14 font-semibold text-xl capitalize rounded-md bg-gradient-to-r from-cyan-500 to-blue-500" size="large"
            onClick={() => { navigate('/welcome/home/' + name) }}>
            Next
          </Button>
        </Box>
      </Box>
    </>
  );
}
