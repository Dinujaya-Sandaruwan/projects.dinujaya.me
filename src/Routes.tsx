import { Route, Routes } from "react-router-dom";
import { AddData, AddSucess, Database, Home } from "./pages";

const Router = () => {
  return (
    <>
      <nav></nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddData />} />
        <Route path="/add/sucess" element={<AddSucess />} />
        <Route path="/database" element={<Database />} />
      </Routes>
    </>
  );
};

export default Router;
