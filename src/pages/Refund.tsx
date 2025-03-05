import { useState } from "react";
import { useNavigate } from "react-router";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { Select } from "../components/Select";
import { Upload } from "../components/Upload";
import { CATEGORIES, CATEGORIES_KEYS } from "../utils/categories";

export function Refund() {
  const [category, setCategory] = useState("");
  const [isloading, setIsLoading] = useState(false);
  const [filename, setFileName] = useState<File | null>(null);
  const navigate = useNavigate();

  function handleSubmit(formData: { get: (arg0: string) => void }) {
    const request = formData.get("request");
    const category = formData.get("category");
    const value = formData.get("value");
    const upload = formData.get("upload");
    console.log(request, category, value, upload);
    navigate("/confirm", { state: { fromSubmit: true } });
  }

  return (
    <form
      action={handleSubmit}
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
      <Input name="request" required legend="Nome da solicitação" />
      <div className="flex gap-4">
        <Select
          name="category"
          required
          legend="Categoria"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {CATEGORIES_KEYS.map((category, index) => (
            <option value={category} key={index}>
              {CATEGORIES[category].name}
            </option>
          ))}
        </Select>
        <Input name="value" required legend="valor" />
      </div>
      <Upload filename={filename && filename.name} name="upload" />
      <Button isLoading={isloading} type="submit">
        Enviar
      </Button>
    </form>
  );
}
