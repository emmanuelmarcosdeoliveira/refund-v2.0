export function formatCurrency(value: number) {
  const currency = Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  return currency.format(value).replace("R$", "");
}
