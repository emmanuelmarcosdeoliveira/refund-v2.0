import { useState } from "react";
import { Link } from "react-router";
import { Button } from "../components/Button";
import { Input } from "../components/Input";

export function SignIn() {
  const [isLoading] = useState(false);

  async function handleSubmit(formData: { get: (arg0: string) => void }) {
    console.log(formData?.get("email"));
    console.log(formData?.get("senha"));
  }

  return (
    <form action={handleSubmit} className="flex w-full flex-col gap-2">
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
      <Button className="my-10" isLoading={isLoading} type="submit">
        Entrar
      </Button>
      <Link
        className="mb-4 text-center text-sm font-semibold text-gray-100 transition ease-linear hover:text-green-800"
        to="/signup"
      >
        Criar conta
      </Link>
    </form>
  );
}
