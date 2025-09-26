export type RefundItemProps = {
  id: string;
  name: string;
  description: string;
  amount: string;
  categoryImg: string;
};

type Props = React.ComponentProps<"a"> & {
  data: RefundItemProps;
};

export function RefundItem({ data, ...rest }: Props) {
  return (
    <a
      className="mx-2 flex cursor-pointer items-center gap-3 rounded-md p-2 hover:bg-green-100/10"
      {...rest}
    >
      <img
        className="h-8 w-8"
        src={data.categoryImg}
        alt="ícone da categoria"
      />
      <div className="flex flex-1 flex-col">
        <strong className="text-sm text-gray-100">{data.name} </strong>
        <span className="text-xs text-gray-200">{data.description}</span>
      </div>
      <span className="text-sm font-semibold text-gray-100">
        <small className="font-normal text-gray-200">R${data.amount}</small>
      </span>
    </a>
  );
}
