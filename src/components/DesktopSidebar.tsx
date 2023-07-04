"use client";

import { useState } from "react";
import useRoutes from "~/hooks/useRoutes";
import DesktopItem from "./DesktopItem";

const DesktopSidebar = () => {
  const routes = useRoutes();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lf:flex-col hidden border-neutral-100 text-neutral-100 lg:fixed lg:inset-y-0 lg:left-0 lg:z-40 lg:flex lg:w-40 lg:justify-between lg:overflow-y-auto lg:border-r lg:pb-4 xl:px-6">
      <nav className="mt-4 flex flex-col justify-between">
        <ul role="list" className="flex flex-col items-center space-y-1 ">
          {routes.map(item => (
            <DesktopItem key={item.label} {...item} />
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default DesktopSidebar;
