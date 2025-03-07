import { Link, Navigate, useLocation } from "react-router";
import okSVG from "../assets/ok.svg";
export function Confirm() {
  const location = useLocation();
  if (!location.state?.fromSubmit) {
    return <Navigate to="/" />;
  }
  return (
    <div className="flex flex-col items-center gap-6 rounded-xl bg-gray-500 p-10 lg:w-[512px]">
      <h1 className="text-center text-2xl font-bold text-green-100">
        Solicitação enviada!
      </h1>
      <img src={okSVG} alt="ícone de Confirmação" />
      <p className="text-center text-sm text-gray-200">
        Agora é apenas aguardar, sua solicitação será analisada, e em breve o
        setor financeiro irá entrar em contato com você
      </p>
      <Link
        className="w-full rounded-lg bg-green-100 p-3 text-center text-white transition-colors hover:bg-green-200"
        to="/"
      >
        Nova Solicitação
      </Link>
    </div>
  );
}
