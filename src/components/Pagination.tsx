import leftSVG from "../assets/left.svg";
import rightSVG from "../assets/right.svg";
import { Button } from "./Button";
type PaginationProps = {
  currency: number;
  total: number;
};

export function Pagination({ currency, total }: PaginationProps) {
  return (
    <div className="mt-6 flex flex-1 items-center justify-center gap-4 text-sm">
      <Button variant="iconSmall">
        <img className="size-4" src={leftSVG} alt="ícone de página anterior" />
      </Button>
      <span>
        {currency} / {total}
      </span>
      <Button variant="iconSmall">
        <img className="size-4" src={rightSVG} alt="ícone proxima página" />
      </Button>
    </div>
  );
}
