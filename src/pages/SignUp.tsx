import { useState } from "react";
import { Link } from "react-router";
import { Button } from "../components/Button";
import { Input } from "../components/Input";

export function SignUp() {
  const [isLoading] = useState(false);

  async function handleSubmit(formData: { get: (arg0: string) => void }) {
    console.log(formData?.get("name"));
    console.log(formData?.get("email"));
    console.log(formData?.get("senha"));
    console.log(formData?.get("confirmeSenha"));
  }

  return (
    <form action={handleSubmit} className="flex w-full flex-col gap-2">
      <Input required legend="nome" name="name" placeholder="seu Nome" />

      <Input
        required
        legend="E-mail"
        type="email"
        name="email"
        placeholder="seu email@.com"
      />
      <Input
        required
        name="senha"
        legend="senha"
        type="password"
        placeholder="123456"
      />
      <Input
        required
        name="confirmeSenha"
        legend="Confirme a senha"
        type="password"
        placeholder="123456"
      />

      <Button isLoading={isLoading} type="submit">
        Cadastrar
      </Button>
      <Link
        className="mt-10 mb-4 text-center text-sm font-semibold text-gray-100 transition ease-linear hover:text-green-800"
        to="/"
      >
        Já tenho uma conta
      </Link>
    </form>
  );
}
