import { Route, Routes } from "react-router";
import { AuthLayout } from "../layout/AuthLayout";
import { NotFound } from "../pages/NotFound";
import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";
import Home from "../pages/Home";

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AuthLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
