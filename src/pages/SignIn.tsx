import { Link } from "react-router";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { useActionState } from "react";
import { z, ZodError } from "zod";
import { api } from "../services/api";
import { AxiosError } from "axios";

const signInSchema = z.object({
  email: z.email({ message: "E-mail inválido" }),
  password: z.string().trim().min(1, { message: "Senha é obrigatória" }),
});

export function SignIn() {
  const [state, formAction, isLoading] = useActionState(signIn, null);

  async function signIn(_: unknown, formData: FormData) {
    try {
      const data = signInSchema.parse({
        email: formData.get("email"),
        password: formData.get("password"),
      });
      const response = await api.post("/sessions", data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
      if (error instanceof ZodError) {
        return { message: error.issues[0].message };
      }
      if (error instanceof AxiosError) {
        return { message: error.response?.data.message };
      }
      return { message: "Não foi possível fazer o login" };
    }
  }

  return (
    <form action={formAction} className="flex w-full flex-col gap-2">
      <Input
        legend="E-mail"
        type="email"
        name="email"
        placeholder="seu email@.com"
      />
      <Input
        name="password"
        legend="senha"
        type="password"
        placeholder="123456"
      />
      <p className="my-4 text-center text-sm font-medium text-red-700">
        {state?.message}
      </p>
      <Button isLoading={isLoading} className="" type="submit">
        Entrar
      </Button>
      <Link
        className="my-4 mb-4 text-center text-sm font-semibold text-gray-100 transition ease-linear hover:text-green-800"
        to="/signup"
      >
        Criar conta
      </Link>
    </form>
  );
}
