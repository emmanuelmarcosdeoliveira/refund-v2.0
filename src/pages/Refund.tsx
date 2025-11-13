import { useState } from "react";
import { useNavigate, useParams } from "react-router";
//import fileSVG from "../assets/file.svg";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { Select } from "../components/Select";
import { Upload } from "../components/Upload";
import { z, ZodError } from "zod";
import { CATEGORIES, CATEGORIES_KEYS } from "../utils/categories";
import { api } from "../services/api";
import { AxiosError } from "axios";
import React from "react";
import { formatCurrency } from "../utils/formatCurrency";
import { SecureImage } from "../components/secureImage";
const refundSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Informe um nome claro para sua solicitação" }),
  category: z.string().min(1, { message: "informe a categoria" }),
  amount: z.coerce
    .number({ message: "informe um valor" })
    .positive({ message: "O valor tem que ser maior que 0" }),
});

export function Refund() {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const navigate = useNavigate();
  const params = useParams<{ id: string }>();
  const [fileURL, setFileURL] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (params.id) {
      return navigate(-1);
    }

    try {
      setIsLoading(true);
      if (!file) {
        return alert("selecione um arquivo");
      }
      const fileUploadForm = new FormData();
      fileUploadForm.append("file", file);
      const response = await api.post("/uploads", fileUploadForm);

      const data = refundSchema.parse({
        name,
        category,
        amount: amount.replace(",", "."),
      });
      console.log(data);
      await api.post("/refunds", {
        ...data,
        filename: response.data.filename,
      });
      navigate("/confirm", { state: { fromSubmit: true } });
    } catch (error) {
      console.log(error);
      if (error instanceof ZodError) {
        return alert(error.issues[0].message);
      }
      if (error instanceof AxiosError) {
        return alert(error.response?.data.message);
      }
      alert("não foi possível fazer essa solicitação");
    } finally {
      setIsLoading(false);
    }
  }

  async function fetchRefund(id: string) {
    try {
      const { data } = await api.get<RefundAPIResponse>(`/refunds/${id}`);
      setName(data.name);
      setCategory(data.category);
      setAmount(formatCurrency(data.amount));
      setFileURL(data.filename);
      console.log(data.filename);
    } catch (error) {
      console.log(error);
      if (error instanceof AxiosError) {
        return alert(error.response?.data.message);
      }
      return alert("não foi possível carregar as informações tente mais tarde");
    }
  }

  React.useEffect(() => {
    if (params.id) {
      fetchRefund(params.id);
    }
  }, [params.id]);

  return (
    <form
      onSubmit={onSubmit}
      className="flex w-full flex-col gap-6 rounded-xl bg-gray-500 p-10 lg:min-w-[512px]"
    >
      <header>
        <h1 className="text-xl font-bold text-gray-100">
          Solicitação de Reembolso
        </h1>
        <p className="mt-2 mb-4 text-sm text-gray-200">
          Dados da despesa para solicitar Reembolso
        </p>
      </header>
      <Input
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
        legend="Nome da solicitação"
        disabled={!!params.id}
      />
      <div className="flex gap-4">
        <Select
          required
          legend="Categoria"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          disabled={!!params.id}
        >
          {CATEGORIES_KEYS.map((category, index) => (
            <option value={category} key={index}>
              {CATEGORIES[category].name}
            </option>
          ))}
        </Select>
        <Input
          required
          legend="valor"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          disabled={!!params.id}
        />
      </div>

      {params.id && fileURL ? (
        <div className="my-6 flex flex-col items-center gap-4">
          <SecureImage
            src={`https://refund-api-3rp2.onrender.com/uploads/${fileURL}`}
            alt="Recibo de reembolso"
            filename={`recibo-${fileURL}`}
          />
        </div>
      ) : (
        <Upload
          filename={file && file.name}
          onChange={(e) => e.target.files && setFile(e.target.files[0])}
        />
      )}

      <Button isLoading={isLoading} type="submit">
        {params.id ? "Voltar" : "Enviar"}
      </Button>
    </form>
  );
}
