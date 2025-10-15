import { formatCurrency } from "../utils/formatCurrency";

interface RefundAmountProps {
  amount: number;
}

export default function RefundAmount({ amount }: RefundAmountProps) {
  return (
    <div className="mt-8 flex items-center justify-between border-t border-green-600 px-5">
      <span className="text-sm font-bold">Total de reembolsos:</span>
      <strong className="text-xs">R${formatCurrency(amount)}</strong>
    </div>
  );
}
