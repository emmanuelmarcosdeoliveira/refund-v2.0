import { BrowserRouter } from "react-router";
import { ManagerRoutes } from "./ManagerRoutes";
export function Routes() {
  return (
    <BrowserRouter>
      {/* <AuthRoutes /> */}
      {/* <EmployeeRoutes /> */}
      <ManagerRoutes />
    </BrowserRouter>
  );
}
