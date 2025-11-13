import { Outlet } from "react-router";

export function AuthLayout() {
  return (
    <div className="mx-auto h-screen w-screen">
      <main className="">
        <Outlet />
      </main>
    </div>
  );
}
