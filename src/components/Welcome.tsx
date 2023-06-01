import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Avatar, Box, Button, IconButton } from "@mui/material";
import { DarkMode, LightMode } from "@mui/icons-material";
import Footer from "./Footer";
import { useUserState } from "../util/User";
import { setTheme } from "../util/Function";

export default function Welcome() {
  const { auth } = useUserState();
  const navigate = useNavigate();
  const { name } = useParams();

  useEffect(() => {
    localStorage.getItem('skipwelcome') === 'true' ? navigate('/welcome/home/' + name) : null;
  }, []);

  const next = () => {
    navigate('/welcome/home/' + name);
    localStorage.setItem('skipwelcome', "true");
  };

  return (
    <>
      <Box className="Backdrop-light dark:Backdrop"></Box>
      <Box className="Grad1"></Box>
      <Box className="Grad2 overflow-clip"></Box>
      <Box className="flex flex-col justify-center items-center text-center gap-10 pt-14">
        <Box>
          <Avatar alt="Remy Sharp" src={auth.image} className="w-36 h-36" />
        </Box>
        <Box className="flex flex-col justify-center items-center text-center gap-1">
          <Box className="text-3xl font-semibold text-primary-dark dark:text-primary-light">
            {auth.name}
          </Box>
          <Box className="text-xl font-normal text-primary-dark dark:text-primary-light">welcome to</Box>
          <Box className="text-5xl font-bold text-primary-dark dark:text-primary-light">India</Box>
        </Box>
      </Box>
      <Box className="absolute bottom-0 w-full px-6">
        <Box className="flex justify-center items-center py-16">
          <Box className="border-2 border-primary-dark dark:border-primary-light p-2 rounded-lg">
            <IconButton size="small" className="block dark:hidden" onClick={() => setTheme("dark")}>
              <LightMode className="text-3xl text-primary-dark" />
            </IconButton>
            <IconButton size="small" className="hidden dark:block" onClick={() => setTheme("light")}>
              <DarkMode className="text-3xl text-primary-light" />
            </IconButton>
          </Box>
        </Box>
        <Box className="flex flex-col justify-center items-center">
          <Button
            variant="contained"
            className="w-full h-14 font-semibold text-xl capitalize rounded-lg bg-gradient-to-r from-secondary-purple to-primary-pink dark:from-secondary-blue dark:to-secondary-purple" size="large"
            onClick={next}>
            Next
          </Button>
        </Box>
        <Box>
          <Footer />
        </Box>
      </Box>
    </>
  );
}
