import { Outlet } from "react-router";
import logo from "../assets/logo.svg";

export function AuthLayout() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-gray-400 text-gray-100">
      <main className="flex flex-col items-center rounded-md bg-gray-500 p-8 md:min-w-[462px]">
        <img className="my-8" src={logo} alt="Logo Refund | OFS" />
        <Outlet />
      </main>
    </div>
  );
}
