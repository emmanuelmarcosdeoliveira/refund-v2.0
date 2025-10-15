import React from "react";

type Props = React.ComponentProps<"select"> & {
  legend?: string;
};

export function SelectRoles({ legend, children, ...rest }: Props) {
  return (
    <>
      <fieldset className="flex max-h-20 flex-1 text-gray-200 in-focus-within:text-green-100">
        {legend && (
          <legend className="text-xxs mb-2 text-inherit uppercase">
            {legend}
          </legend>
        )}
        <select
          className="h-12 w-full rounded-lg border border-gray-300 bg-transparent px-4 text-sm text-gray-100 outline-none focus:border-2 focus:border-green-100"
          value=""
          {...rest}
        >
          {children}
        </select>
      </fieldset>
    </>
  );
}
