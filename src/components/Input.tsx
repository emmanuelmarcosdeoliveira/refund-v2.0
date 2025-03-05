import React from "react";

type InputProps = React.ComponentProps<"input"> & {
  legend?: string;
};

export function Input({ legend, type = "text", ...rest }: InputProps) {
  return (
    <fieldset className="max-h-20 text-gray-200 focus-within:text-green-100">
      {legend && (
        <legend className="text-xxs mb-2 text-inherit uppercase">
          {" "}
          {legend}
        </legend>
      )}
      <input
        type={type}
        className="h-12 w-full rounded-lg border border-gray-300 bg-transparent px-4 text-sm text-gray-100 placeholder-gray-300 outline-none focus:border-2 focus:border-green-100"
        {...rest}
      />
    </fieldset>
  );
}
