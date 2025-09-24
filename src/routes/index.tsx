import { useState } from "react";
import { BrowserRouter } from "react-router";
import { Loading } from "../components/Loading";
import { AuthRoutes } from "./AuthRoutes";
import { EmployeeRoutes } from "./EmployeeRoutes";
import { ManagerRoutes } from "./ManagerRoutes";
import { useAuth } from "../hooks/useAuth";

export function Routes() {
  const { session } = useAuth();

  const [visible, setVisible] = useState(true);
  function Route() {
    switch (session?.user.role) {
      case "employee":
        return <EmployeeRoutes />;
      case "manager":
        return <ManagerRoutes />;
      default:
        return <AuthRoutes />;
    }
  }
  setTimeout(() => {
    setVisible(false);
  }, 3000);
  return (
    <BrowserRouter>
      {visible && <Loading />}
      <Route />
    </BrowserRouter>
  );
}
