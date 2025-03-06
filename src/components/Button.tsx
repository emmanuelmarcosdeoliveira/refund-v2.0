import React from "react";
import { classMerge } from "../utils/classMerge";

const variants = {
  button: {
    base: "h-12",
    icon: "w-12 h-12",
    iconSmall: "w-6 h-6",
  },
};

type ButtonProps = React.ComponentProps<"button"> & {
  isLoading?: boolean;
  variant?: "base" | "icon" | "iconSmall";
  className?: string;
};

export function Button({
  isLoading,
  className,
  children,
  type = "button",
  variant = "base",
  ...rest
}: ButtonProps) {
  return (
    <button
      type={type}
      {...rest}
      disabled={isLoading}
      className={classMerge([
        "flex cursor-pointer items-center justify-center rounded-lg bg-green-100 text-white transition-colors ease-linear hover:bg-green-200 disabled:cursor-progress disabled:opacity-50",
        variants.button[variant],
        className,
      ])}
      {...rest}
    >
      {children}
    </button>
  );
}
