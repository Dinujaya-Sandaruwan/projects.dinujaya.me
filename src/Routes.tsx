import { Route, Routes } from "react-router-dom";
import { AddData, AddSucess, Database, Home } from "./pages";
import Test from "./components/Test";

const Router = () => {
  return (
    <>
      <nav></nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddData />} />
        <Route path="/add/sucess" element={<AddSucess />} />
        <Route path="/database" element={<Database />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </>
  );
};

export default Router;
