import { Link } from "react-router";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { z, ZodError } from "zod";
import { api } from "../services/api";
import { useNavigate } from "react-router";
import { AxiosError } from "axios";
import { useActionState } from "react";

const signUpSchema = z
  .object({
    name: z.string().trim().min(1, { message: "Nome é obrigatório" }),

    email: z.email({ message: "E-mail inválido" }),

    password: z
      .string()
      .min(6, { message: "Senha deve ter no mínimo 6 caracteres" }),

    passwordConfirm: z.string({ message: "Confirme a senha" }),
  })

  .refine((data) => data.password === data.passwordConfirm, {
    message: "As senhas não conferem",
    path: ["passwordConfirm"],
  });

export function SignUp() {
  const navigate = useNavigate();
  const [state, formAction, isLoading] = useActionState(onSubmit, null);

  async function onSubmit(_: unknown, formData: FormData) {
    try {
      const data = signUpSchema.parse({
        name: formData.get("name"),
        email: formData.get("email"),
        password: formData.get("password"),
        passwordConfirm: formData.get("passwordConfirm"),
      });
      await api.post("/users", data);
      navigate("/");
    } catch (error) {
      if (error instanceof ZodError) {
        return { message: error.issues[0].message };
      }
      if (error instanceof AxiosError) {
        return { message: error.response?.data.message };
      }
      return { message: "Não foi possível cadastrar nesse momento" };
    }
  }
  return (
    <form action={formAction} className="flex w-full flex-col gap-2">
      <Input legend="nome" name="name" placeholder="seu nome" />

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
      <Input
        name="passwordConfirm"
        legend="Confirme a senha"
        type="password"
        placeholder="123456"
      />

      <span className="my-6 text-center text-sm font-medium text-red-700">
        {state?.message}
      </span>
      <Button isLoading={isLoading} type="submit">
        Cadastrar
      </Button>
      <Link
        className="mb-4 text-center text-sm font-semibold text-gray-100 transition ease-linear hover:text-green-800"
        to="/"
      >
        Já tenho uma conta
      </Link>
    </form>
  );
}
