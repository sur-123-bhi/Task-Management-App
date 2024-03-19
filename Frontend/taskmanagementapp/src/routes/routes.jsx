import { Route, Routes } from "react-router";
import { Login } from "../pages/Login";
import { Signup } from "../pages/Signup";
import Dashboard from "../pages/Dashboard";
import { PrivateRoutes } from "./PrivateRoute";

const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path='/signup' element={<Signup />}/>
        <Route element={<PrivateRoutes />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </>
  );
};

export default Routers;