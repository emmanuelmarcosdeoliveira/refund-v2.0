import { ScaleLoader } from "react-spinners";
import logo from "../assets/logo.svg";
export function Loading() {
  return (
    <div className="flex h-screen items-center justify-center w-screen">
      <div className="flex flex-col gap-4 items-center justify-items-center">
        <img src={logo} alt="ícone do Refund" />
        <ScaleLoader
          speedMultiplier={0.5}
          height={55}
          width={6}
          radius={10}
          color="#1f8459"
        />
      </div>
    </div>
  );
}
