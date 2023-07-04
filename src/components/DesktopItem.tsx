"use client";

import clsx from "clsx";
import Link from "next/link";
import { IconType } from "react-icons";

export type TypeRouteItemProps = {
  label?: string;
  href: string;
  icon: IconType;
  active?: boolean;
  onClick?: () => void;
};

const DesktopItem = ({
  active,
  href,
  icon: Icon,
  onClick,
  label,
}: TypeRouteItemProps) => {
  const handleClick = () => {
    if (onClick) return onClick();
  };
  return (
    <li onClick={handleClick}>
      <Link
        href={href}
        className={clsx(
          "group flex gap-x-3 p-3 text-sm leading-6  hover:bg-neutral-950 hover:text-fuchsia-900",
          active && "bg-neutral-950 text-fuchsia-900"
        )}>
        <Icon className="h-6 w-6 shrink-0" />
        <span className="sr-only">{label}</span>
      </Link>
    </li>
  );
};

export default DesktopItem;
