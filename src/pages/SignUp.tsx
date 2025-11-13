import { Link } from "react-router";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { z, ZodError } from "zod";
import { api } from "../services/api";
import { useNavigate } from "react-router";
import { AxiosError } from "axios";
import { useActionState } from "react";
import { SelectRoles } from "../components/SelectRoles";
import React from "react";
import { toast } from "sonner";

const signUpSchema = z
  .object({
    name: z.string().trim().min(1, { message: "Nome é obrigatório" }),
    email: z.email({ message: "E-mail inválido" }),
    password: z
      .string()
      .min(6, { message: "Senha deve ter no mínimo 6 caracteres" }),
    passwordConfirm: z.string({ message: "Confirme a senha" }),
    role: z.string({ message: "selecione uma atribuição" }),
  })

  .refine((data) => data.password === data.passwordConfirm, {
    message: "As senhas não conferem",
    path: ["passwordConfirm"],
  });

export function SignUp() {
  const [select, SetSelect] = React.useState("");
  const navigate = useNavigate();
  const [state, formAction, isLoading] = useActionState(onSubmit, null);

  async function onSubmit(_: unknown, formData: FormData) {
    try {
      const data = signUpSchema.parse({
        name: formData.get("name"),
        email: formData.get("email"),
        password: formData.get("password"),
        passwordConfirm: formData.get("passwordConfirm"),
        role: formData.get("role"),
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
    <div className="mx-auto flex min-h-screen w-full max-w-[360px] flex-col items-center justify-center">
      <Link to={"/"}>
        {" "}
        <div className="flex justify-center gap-2">
          <img className="mb-8" src="/icon.svg" alt="ícone refund" />
          <span className="text-lg font-bold text-green-700">Refund</span>
        </div>
      </Link>

      <form
        action={formAction}
        className="flex w-full flex-col gap-2 rounded-xl bg-gray-500 px-6 py-8"
      >
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
        <SelectRoles
          name="role"
          required
          onChange={(e) => SetSelect(e.target.value)}
          legend="Selecione a atribuição"
          value={select}
        >
          <option disabled className="text-inherit hover:bg-green-100" value="">
            Selecione
          </option>
          <option className="text-inherit" value="employee">
            funcionário
          </option>
          <option className="text-inherit" value="manager">
            gerente
          </option>
        </SelectRoles>

        <span className="my-6 text-center text-sm font-medium text-red-700">
          {state?.message}
        </span>
        <Button
          onClick={() => toast.success("usuário cadastrado com sucesso")}
          isLoading={isLoading}
          type="submit"
        >
          Cadastrar
        </Button>
        <Link
          className="mb-4 text-center text-sm font-semibold text-gray-100 transition ease-linear hover:text-green-800"
          to="/signin"
        >
          Já tenho uma conta
        </Link>
      </form>
    </div>
  );
}
