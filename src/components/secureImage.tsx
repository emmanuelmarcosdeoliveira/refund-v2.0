import { useEffect, useState } from "react";

interface SecureImageProps {
  src: string; // URL da API, ex: https://refund-api-dcvr.onrender.com/uploads/arquivo.png
  alt?: string;
  filename?: string; // nome do arquivo para download
}

export function SecureImage({ src, filename }: SecureImageProps) {
  const [imageBlob, setImageBlob] = useState<Blob | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let objectUrl: string | null = null;
    const token = localStorage.getItem("@refund:token"); // chave correta

    if (!token) {
      setError("Token não encontrado");
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);

    fetch(`${src}?t=${Date.now()}`, {
      // força ignorar cache 304
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error(`Erro ao carregar imagem (${res.status})`);
        return res.blob();
      })
      .then((blob) => {
        setImageBlob(blob);
        objectUrl = URL.createObjectURL(blob);
      })
      .catch((err) => {
        console.error(err);
        setError("Não foi possível carregar o comprovante");
      })
      .finally(() => setLoading(false));

    return () => {
      if (objectUrl) URL.revokeObjectURL(objectUrl);
    };
  }, [src]);

  const handleDownload = () => {
    if (!imageBlob) return;
    const link = document.createElement("a");
    link.href = URL.createObjectURL(imageBlob);
    link.download = filename || "comprovante.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (loading)
    return (
      <div className="flex animate-pulse flex-col items-center gap-2">
        <div className="w-full rounded-lg bg-gray-600" />
        <p className="text-sm text-gray-300">Carregando comprovante...</p>
      </div>
    );

  if (error) return <p className="text-sm text-red-400">{error}</p>;

  return (
    <div className="flex flex-col items-center gap-2">
      <button
        type="button"
        onClick={handleDownload}
        className="rounded-lg bg-green-600 px-4 py-2 text-white transition hover:bg-green-700"
      >
        Baixar Comprovante
      </button>
    </div>
  );
}
