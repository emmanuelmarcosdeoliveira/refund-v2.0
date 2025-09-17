import { useState } from "react";
import { Link } from "react-router";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { z, ZodError } from "zod";
import { api } from "../services/api";
import { useNavigate } from "react-router";
import { AxiosError } from "axios";
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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
      setIsLoading(true);
      const data = signUpSchema.parse({
        name,
        email,
        password,
        passwordConfirm,
      });
      await api.post("/users", data);
      if (confirm("Cadastrado com sucesso. Ir para a tela de entrar ?")) {
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      if (error instanceof ZodError) {
        return alert(error.issues[0].message);
      }
      if (error instanceof AxiosError) {
        return alert(error.response?.data.message);
      }
      alert("Não foi possível cadastrar nesse momento");
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <form onSubmit={onSubmit} className="flex w-full flex-col gap-2">
      <Input
        required
        legend="nome"
        name="name"
        placeholder="seu nome"
        onChange={(e) => setName(e.target.value)}
      />

      <Input
        required
        legend="E-mail"
        type="email"
        name="email"
        placeholder="seu email@.com"
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        required
        name="senha"
        legend="senha"
        type="password"
        placeholder="123456"
        onChange={(e) => setPassword(e.target.value)}
      />
      <Input
        required
        name="confirmeSenha"
        legend="Confirme a senha"
        type="password"
        placeholder="123456"
        onChange={(e) => setPasswordConfirm(e.target.value)}
      />

      <Button className="my-10" isLoading={isLoading} type="submit">
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
