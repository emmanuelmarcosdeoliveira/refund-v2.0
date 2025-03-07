import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import fileSVG from "../assets/file.svg";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { Select } from "../components/Select";
import { Upload } from "../components/Upload";

import { CATEGORIES, CATEGORIES_KEYS } from "../utils/categories";

export function Refund() {
  const [name, setName] = useState("Hotel Evento");
  const [amount, setAmount] = useState("45");
  const [category, setCategory] = useState("Transporte");
  const [isLoading] = useState(false);
  const [filename, setFileName] = useState<File | null>(null);
  const navigate = useNavigate();
  const params = useParams<{ id: string }>();

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log(name, amount, category, filename);
    if (params.id) {
      return navigate(-1);
    }
    navigate("/confirm", { state: { fromSubmit: true } });
  }

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

      {params.id ? (
        <a
          href="https://www.ofs.dev.br"
          target="_blank"
          className="my-6 flex items-center justify-center gap-2 text-sm font-semibold text-green-100 transition ease-linear hover:opacity-70"
        >
          <img src={fileSVG} alt="ícone de arquivo" />
          Abrir Comprovante
        </a>
      ) : (
        <Upload
          filename={filename && filename.name}
          onChange={(e) => e.target.files && setFileName(e.target.files[0])}
        />
      )}

      <Button isLoading={isLoading} type="submit">
        {params.id ? "Voltar" : "Enviar"}
      </Button>
    </form>
  );
}
