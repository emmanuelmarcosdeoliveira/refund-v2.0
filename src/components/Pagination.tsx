import leftSVG from "../assets/left.svg";
import rightSVG from "../assets/right.svg";
import { Button } from "./Button";

type PaginationProps = {
  currency: number;
  total: number;
  onNext: () => void;
  onPrevios: () => void;
};

export function Pagination({
  currency,
  total,
  onNext,
  onPrevios,
}: PaginationProps) {
  return (
    <div className="mt-6 flex flex-1 items-center justify-center gap-4 text-sm">
      <Button onClick={onPrevios} variant="iconSmall" disabled={currency === 1}>
        <img className="size-4" src={leftSVG} alt="ícone de página anterior" />
      </Button>
      <span className="w-12 text-center text-xs text-green-800">
        {currency} / {total}
      </span>
      <Button
        onClick={onNext}
        variant="iconSmall"
        disabled={currency === total}
      >
        <img className="size-4" src={rightSVG} alt="ícone proxima página" />
      </Button>
    </div>
  );
}
