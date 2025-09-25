import { ScaleLoader } from "react-spinners";

export function Loading() {
  return (
    <div className="flex h-screen items-center justify-center w-screen">
      <div className="flex flex-col items-center justify-items-center">
        <ScaleLoader
          speedMultiplier={0.5}
          height={45}
          width={6}
          radius={10}
          color="#1f8459"
        />
      </div>
    </div>
  );
}
