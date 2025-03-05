import { BrowserRouter } from "react-router";
import { AuthRoutes } from "./Auth-routes";

export function Routes() {
  return (
    <BrowserRouter>
      <AuthRoutes />
    </BrowserRouter>
  );
}
