import { Route, Routes } from "react-router-dom";
import { AddData, Home } from "./pages";

const Router = () => {
  return (
    <>
      <nav></nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddData />} />
      </Routes>
    </>
  );
};

export default Router;
