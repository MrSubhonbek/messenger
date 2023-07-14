"use client";

import clsx from "clsx";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { MdOutlineGroupAdd } from "react-icons/md";

import useConversation from "~/hooks/useConversation";
import { TypeFullConversation } from "~/types";
import ConversationBox from "./ConversationBox";
import GroupChatModal from "./GroupChatModal";
import { User } from "@prisma/client";

const ConversationsList = ({
  conversations,
  users,
}: {
  conversations: TypeFullConversation[];
  users: User[];
}) => {
  const [items, setItems] = useState(conversations);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const router = useRouter();
  const { conversationId, isOpen } = useConversation();
  return (
    <>
      <GroupChatModal
        users={users}
        isOpen={isOpenModal}
        onClose={() => setIsOpenModal(false)}
      />
      <aside
        className={clsx(
          "fixed inset-y-0 overflow-y-auto pb-20 lg:left-12 lg:block lg:w-80 lg:pb-0 xl:left-20",
          isOpen ? "hidden" : "left-0 block w-full"
        )}>
        <div className="px-5">
          <div className="mb-4 flex justify-between pt-4">
            <div className="text-2xl font-bold text-neutral-100">Messages</div>
            <div
              onClick={() => setIsOpenModal(true)}
              className="cursor-pointer bg-neutral-950 p-2 text-neutral-100 transition hover:text-fuchsia-900">
              <MdOutlineGroupAdd size={20} />
            </div>
          </div>
          {items.map(item => (
            <ConversationBox
              key={item.id}
              selected={conversationId === item.id}
              data={item}
            />
          ))}
        </div>
      </aside>
    </>
  );
};

export default ConversationsList;
ConversationsList;
