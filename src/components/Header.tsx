import logoSVG from "../assets/logo.svg";
import logoutSVG from "../assets/logout.svg";

export function Header() {
  return (
    <header className="flex w-full justify-between">
      <img className="my-8" src={logoSVG} alt="Logo Refund | OFS" />
      <div className="flex items-center gap-3">
        <span className="text-sm font-semibold text-gray-200">
          Olá Emmanuel
        </span>
        <img
          className="my-8 cursor-pointer transition ease-linear hover:opacity-75"
          src={logoutSVG}
          alt="ícone de sair | OFS"
        />
      </div>
    </header>
  );
}
