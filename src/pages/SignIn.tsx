import { AxiosError } from "axios";
import { useActionState } from "react";
import { Link } from "react-router";
import { z, ZodError } from "zod";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { useAuth } from "../hooks/useAuth";
import { api } from "../services/api";

const signInSchema = z.object({
  email: z.email({ message: "E-mail inválido" }),
  password: z.string().trim().min(1, { message: "Senha é obrigatória" }),
});

export function SignIn() {
  const [state, formAction, isLoading] = useActionState(signIn, null);
  const auth = useAuth();

  async function signIn(_: unknown, formData: FormData) {
    try {
      const data = signInSchema.parse({
        email: formData.get("email"),
        password: formData.get("password"),
      });
      const response = await api.post("/sessions", data);
      auth.save(response.data);
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
    <form action={formAction} className="flex flex-col gap-2 w-full">
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
      <p className="font-medium my-4 text-center text-red-700 text-sm">
        {state?.message}
      </p>
      <Button isLoading={isLoading} className="" type="submit">
        Entrar
      </Button>
      <Link
        className="ease-linear font-semibold hover:text-green-800 mb-4 my-4 text-center text-gray-100 text-sm transition"
        to="/signup"
      >
        Criar conta
      </Link>
    </form>
  );
}
