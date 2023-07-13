"use client";

import { Converasation, User } from "@prisma/client";
import Link from "next/link";
import { useMemo, useState } from "react";
import { HiChevronLeft, HiEllipsisHorizontal } from "react-icons/hi2";
import Avatar from "~/components/Avatar";

import useOtherUser from "~/hooks/useOtherUsers";
import ProfileDrawer from "./ProfileDrawer";

export type TypeHeader = {
  conversation: Converasation & {
    user: User[];
  };
};

const Header = ({ conversation }: TypeHeader) => {
  const otherUser = useOtherUser(conversation);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const statusText = useMemo(() => {
    if (conversation.isGroup) return `${conversation.user.length} members`;
    return `Active`;
  }, [conversation]);

  return (
    <>
      <ProfileDrawer
        data={conversation}
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      />
      <div className="flex w-full items-center justify-between border-b  px-4 py-3 shadow-sm sm:px-4 lg:px-6">
        <div className="flex items-center gap-3">
          <Link
            href={"/conversations"}
            className="block cursor-pointer transition-all hover:text-fuchsia-900 lg:hidden">
            <HiChevronLeft size={32} />
          </Link>
          <Avatar user={otherUser} />
          <div className="flex flex-col">
            <div>{conversation.name || otherUser.name}</div>
            <div className="text-sm font-light">{statusText}</div>
          </div>
        </div>
        <HiEllipsisHorizontal
          size={32}
          onClick={() => {
            setIsDrawerOpen(true);
          }}
          className="cursor-pointer transition-all hover:text-fuchsia-900"
        />
      </div>
    </>
  );
};

export default Header;
