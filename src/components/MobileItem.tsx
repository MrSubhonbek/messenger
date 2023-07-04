"use client";
import Link from "next/link";

import { TypeRouteItemProps } from "./DesktopItem";
import clsx from "clsx";

const MobileItem = ({
  href,
  icon: Icon,
  active,
  onClick,
}: TypeRouteItemProps) => {
  const handleClick = () => {
    if (onClick) return onClick();
  };
  return (
    <Link
      href={href}
      onClick={handleClick}
      className={clsx(
        "group flex w-full justify-center gap-x-3 p-4 text-sm font-semibold leading-6 hover:bg-neutral-950 hover:text-fuchsia-900",
        active && "bg-neutral-950 text-fuchsia-900"
      )}>
      <Icon className="h-6 w-6" />
    </Link>
  );
};

export default MobileItem;
