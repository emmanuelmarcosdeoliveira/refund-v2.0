import { useEffect, useState } from "react";
import { Button } from "./Button";

interface SecureImageProps {
  src: string; 
  alt?: string;
  filename?: string; 
}

export function SecureImage({ src, filename }: SecureImageProps) {
  const [imageBlob, setImageBlob] = useState<Blob | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let objectUrl: string | null = null;
    const token = localStorage.getItem("@refund:token"); 
    if (!token) {
      setError("Token não encontrado");
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);

    fetch(`${src}?t=${Date.now()}`, {
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
      <Button
        type="button"
        className="p-2"
        onClick={handleDownload}

       
      >
        Baixar Comprovante
      </Button>
    </div>
  );
}
