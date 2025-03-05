import { Link } from "react-router";

export function NotFound() {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="flex flex-col">
        <h1 className="mb-10 text-2xl font-semibold text-gray-100">
          Ops... Essa página não existe 😢
        </h1>
        <Link
          className="text-center font-semibold text-green-100 transition ease-linear hover:text-green-200"
          to="/"
        >
          Voltar para o início
        </Link>
      </div>
    </div>
  );
}
