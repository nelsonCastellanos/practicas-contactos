import * as React from "react";
import {
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
  Navigate,
  Outlet,
} from "react-router-dom";
import Contact from "../Componentes/Contact/Contact";
import SignIn from "../Componentes/SignIn/SignIn";
import SignUp from "../Componentes/SignUp/SignUp";

export default function CarvajalRoutes() {
  return (
      <Routes>
          <Route path="/login" element={<SignIn />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/contact" element={<Contact />} />
      </Routes>
  );
}
