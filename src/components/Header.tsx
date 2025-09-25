import logoSVG from "../assets/logo.svg";
import logoutSVG from "../assets/logout.svg";
import { useAuth } from "../hooks/useAuth";
export function Header() {
  const auth = useAuth();
  console.log(auth);
  return (
    <header className="flex justify-between w-full">
      <img className="my-8" src={logoSVG} alt="Logo Refund | OFS" />
      <div className="flex gap-3 items-center">
        <span className="font-semibold text-gray-200 text-sm">
          Olá, {auth.session?.user.name}
        </span>
        <img
          className="cursor-pointer ease-linear hover:opacity-75 my-8 transition"
          src={logoutSVG}
          alt="ícone de sair | OFS"
          onClick={() => auth.remove()}
        />
      </div>
    </header>
  );
}
