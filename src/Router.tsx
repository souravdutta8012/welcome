import { useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, Slide } from "react-toastify";
import { DoneAll } from "@mui/icons-material";
import Welcome from "./components/Welcome";
import Home from "./components/Home";
import Orientation from "./components/Orientation";
import { getName } from "./util/Function";

export const Router = (_props: any) => {
  const name = getName();

  const [orientation, setOrientation] = useState<any>(undefined);

  useEffect(() => {
    checkOrientation();
    const handleWindowResize = () => {
      checkOrientation();
    };
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  const checkOrientation = () => {
    if (window.innerWidth > window.innerHeight) {
      setOrientation('landscape');
    } else {
      setOrientation('portrait');
    }
  };

  return (
    <>
      {orientation && orientation === 'portrait' ? (
        <>
          <ToastContainer
            position="top-center"
            autoClose={2000}
            hideProgressBar={true}
            newestOnTop={false}
            closeOnClick={false}
            closeButton={false}
            rtl={false}
            pauseOnHover={false}
            transition={Slide}
            pauseOnFocusLoss
            draggable
            theme="colored"
            className="font-semibold"
            toastStyle={{ backgroundColor: "#198CE6" }}
            icon={<DoneAll />}
          />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Navigate to={"/welcome/" + name} />} />
              <Route path="/welcome/:name?" element={<Welcome />} />
              <Route path="/welcome/home/:name?" element={<Home />} />
              <Route path="/welcome/home/:dialogtype/:name?" element={<Home />} />
            </Routes>
          </BrowserRouter>
        </>
      ) : (
        <>
          <Orientation />
        </>
      )}
    </>
  );
};
