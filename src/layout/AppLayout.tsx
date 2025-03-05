import { Outlet } from "react-router";
import { Header } from "../components/Header";

export function AppLayout() {
  return (
    <div className="flex h-screen w-screen flex-col items-center bg-gray-400">
      <main className="w-full p-3 md:w-auto">
        <Header />
        <Outlet />
      </main>
    </div>
  );
}
