import uploadSVG from "../assets/upload.svg";

type UploadProps = React.ComponentProps<"input"> & {
  filename?: string | null;
};

export function Upload({ filename = null, ...rest }: UploadProps) {
  return (
    <div>
      <legend className="text-xxs mb-2 text-gray-200 uppercase">
        Comprovante
      </legend>
      <div className="flex h-12 w-full items-center rounded-lg border border-gray-300 bg-transparent text-sm text-gray-100 outline-none">
        <input type="file" id="upload" className="hidden" {...rest} />
        <span className="flex-1 pl-4 text-xs text-gray-100">
          {filename ?? "Selecione o Arquivo"}
        </span>

        <label
          htmlFor="upload"
          className="disabled:opa flex h-12 cursor-pointer items-center rounded-lg bg-green-100 px-4 transition ease-linear hover:bg-green-200 disabled:opacity-50"
        >
          <img
            className="h-6 w-6"
            src={uploadSVG}
            alt="ícone de seleção de imagem"
          />
        </label>
      </div>
    </div>
  );
}
