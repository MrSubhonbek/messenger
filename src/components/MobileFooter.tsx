"use client";

import useConversation from "~/hooks/useConversation";
import useRoutes from "~/hooks/useRoutes";
import MobileItem from "./MobileItem";

const MobileFooter = () => {
  const routes = useRoutes();
  const { isOpen } = useConversation();

  if (isOpen) return null;

  return (
    <div className="fixed bottom-0 z-40 flex w-full items-center justify-between border-t text-neutral-100 lg:hidden">
      {routes.map(route => (
        <MobileItem key={route.label} {...route} />
      ))}
    </div>
  );
};

export default MobileFooter;
