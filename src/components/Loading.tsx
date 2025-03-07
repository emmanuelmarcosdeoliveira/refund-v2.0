import { HashLoader } from "react-spinners";

export function Loading() {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="flex flex-col items-center gap-6">
        <h1 className="text-2xl text-green-200"> Loanding . . .</h1>
        <HashLoader speedMultiplier={0.5} size={180} color="#1f8459" />
      </div>
    </div>
  );
}
