import React from "react";

type ButtonProps = React.ComponentProps<"button"> & {
  isLoading?: boolean;
};

export function Button({
  isLoading,
  children,
  type = "button",
  ...rest
}: ButtonProps) {
  return (
    <button
      type={type}
      {...rest}
      disabled={isLoading}
      className="flex h-12 cursor-pointer items-center justify-center rounded-lg bg-green-100 text-white transition-colors ease-linear hover:bg-green-200 disabled:cursor-progress disabled:opacity-50"
    >
      {children}
    </button>
  );
}
