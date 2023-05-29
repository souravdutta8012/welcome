import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, Slide } from "react-toastify";
import { DoneAll } from "@mui/icons-material";
import { getName } from "./util/Function";
import Welcome from "./components/Welcome";
import Home from "./components/Home";

export const Router = (_props: any) => {
  const name = getName();

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick={false}
        closeButton={false}
        rtl={false}
        transition={Slide}
        pauseOnFocusLoss
        draggable
        pauseOnHover
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
  );
};
