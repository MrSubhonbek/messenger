"use client";

import React, { FC, PropsWithChildren } from "react";
import clsx from "clsx";

type TypeButtonProps = {
  type?: "button" | "submit" | "reset" | undefined;
  fullWidth?: boolean;
  onClick?: () => void;
  secondary?: boolean;
  danger?: boolean;
  disable?: boolean;
};

const Button: FC<PropsWithChildren<TypeButtonProps>> = ({
  danger,
  disable,
  onClick,
  secondary,
  children,
  fullWidth,
  type,
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disable}
      className={clsx(
        "flex justify-center px-3 py-3 text-sm font-semibold focus:outline-2 focus:outline-offset-2 focus-visible:outline",
        disable && "cursor-default opacity-50",
        fullWidth && "w-full",
        secondary ? "text-neutral-900" : "text-neutral-100",
        danger &&
          "focus-visible:outline-rouse-600 bg-rose-500 hover:bg-rose-600",
        !secondary &&
          !danger &&
          "bg-neutral-900 hover:bg-black focus-visible:outline-fuchsia-900"
      )}
    >
      {children}
    </button>
  );
};

export default Button;
