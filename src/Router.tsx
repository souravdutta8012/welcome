import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { getName } from "./util/Function";
import Welcome from "./components/Welcome";
import Home from "./components/Home";

export const Router = (_props: any) => {
  const name = getName();

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to={"/welcome/" + name} />} />
          <Route path="/welcome/:name?" element={<Welcome />} />
          <Route path="/welcome/home/:name?" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
