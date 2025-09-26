import React, { useEffect, useState } from "react";
import searchSVG from "../assets/search.svg";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { Pagination } from "../components/Pagination";
import { RefundItem, RefundItemProps } from "../components/RefundItem";
import { CATEGORIES } from "../utils/categories";
import { formatCurrency } from "../utils/formatCurrency";
import { api } from "../services/api";
import { AxiosError } from "axios";

const PER_PAGE = 5;

export function Dashboard() {
  const [name, setName] = useState("");
  const [page, setPage] = useState(1);
  const [totalOfPage, setTotalOfPages] = useState(1);
  const [refunds, setRefunds] = useState<RefundItemProps[]>([]);

  async function fetchRefunds() {
    try {
      const response = await api.get<RefundsPaginationAPIResponse>(
        `/refunds?name=${name.trim()}&page=${page}&perPage=${PER_PAGE}`,
      );
      console.log(response);
      setRefunds(
        response.data.refunds.map((refund) => ({
          id: refund.id,
          name: refund.user.name,
          description: refund.name,
          amount: formatCurrency(refund.amount),
          categoryImg: CATEGORIES[refund.category].icon,
        })),
      );
      setTotalOfPages(response.data.pagination.totalPages);
    } catch (error) {
      console.log(error);
      if (error instanceof AxiosError) {
        return alert(error.response?.data.message);
      }
    }
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    fetchRefunds();
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

  useEffect(() => {
    fetchRefunds();
  }, []);

  return (
    <div className="rounded-xl bg-gray-500 p-10 md:min-w-[768px]">
      <h1 className="flex-1 text-xl font-bold text-gray-100">Solicitações</h1>

      <form
        onSubmit={onSubmit}
        className="mt-6 flex flex-1 items-center justify-between gap-2 border-b-[1px] border-b-gray-400 pb-6 md:flex-row"
      >
        {" "}
        <div className="w-full">
          <Input
            name="search"
            placeholder="Faça a pesquisa pelo nome"
            onChange={(e) => setName(e.target.value)}
          />
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
        currency={page}
        total={totalOfPage}
        onNext={() => handlePagination("nextPage")}
        onPrevios={() => handlePagination("prevPage")}
      />
    </div>
  );
}
