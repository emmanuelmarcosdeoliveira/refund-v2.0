import { useState } from "react";
import searchSVG from "../assets/search.svg";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { Pagination } from "../components/Pagination";
import { RefundItem, RefundItemProps } from "../components/RefundItem";
import { CATEGORIES } from "../utils/categories";
import { formatCurrency } from "../utils/formatCurrency";

const REFUND_EXAMPLE = {
  id: "123",
  name: "Rodrigo",
  category: "Transporte",
  amount: formatCurrency(34.5),
  categoryImg: CATEGORIES["transport"].icon,
};

export function Dashboard() {
  const [page, setPage] = useState(1);
  const [totalOfPage] = useState(10);
  const [refunds] = useState<RefundItemProps[]>([REFUND_EXAMPLE]);

  function handleSubmit(formData: { get: (arg0: string) => void }) {
    const search = formData.get("search");
    console.log(search);
  }

  function handlePagination(action: "nextPage" | "prevPage") {
    setPage((prevPage) => {
      if (action === "nextPage" && prevPage < totalOfPage) {
        return prevPage + 1;
      }
      if (action === "prevPage" && prevPage > 1) {
        return prevPage - 1;
      }
      return prevPage;
    });
  }

  return (
    <div className="rounded-xl bg-gray-500 p-10 md:min-w-[768px]">
      <h1 className="flex-1 text-xl font-bold text-gray-100">Solicitações</h1>
      <form
        action={handleSubmit}
        className="mt-6 flex flex-1 items-center justify-between gap-2 border-b-[1px] border-b-gray-400 pb-6 md:flex-row"
      >
        {" "}
        <div className="w-full">
          <Input name="search" placeholder="Faça a pesquisa pelo nome" />
        </div>
        <Button type="submit" variant="icon">
          <img className="w-5" src={searchSVG} alt="ícone de pesquisar" />
        </Button>
      </form>
      <div className="mt-6 flex max-h-[342px] flex-col gap-4 overflow-y-scroll">
        {refunds.map((item) => (
          <RefundItem key={item.id} data={item} href={`/refund/${item.id}`} />
        ))}
      </div>
      <Pagination
        onNext={() => handlePagination("nextPage")}
        onPrevios={() => handlePagination("prevPage")}
        currency={page}
        total={totalOfPage}
      />
    </div>
  );
}
