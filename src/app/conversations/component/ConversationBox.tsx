"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useCallback, useMemo } from "react";
import { User, Message, Converasation } from "@prisma/client";
import { format } from "date-fns";
import clsx from "clsx";

import { TypeFullConversation } from "~/types";
import useOtherUser from "~/hooks/useOtherUsers";
import Avatar from "~/components/Avatar";

const ConversationBox = ({
  data,
  selected,
}: {
  data: TypeFullConversation;
  selected?: boolean;
}) => {
  const otherUser = useOtherUser(data);
  const session = useSession();
  const router = useRouter();

  const handleClick = useCallback(() => {
    router.push(`/conversations/${data.id}`);
  }, [data.id]);

  const lastMessage = useMemo(() => {
    const message = data.messages || [];
    return message[message.length - 1];
  }, [data.messages]);

  const userEmail = useMemo(() => {
    return session.data?.user?.email;
  }, [session.data?.user?.email]);

  const hasSeen = useMemo(() => {
    if (!lastMessage || !userEmail) return false;
    const seenArray = lastMessage.seen || [];
    return seenArray.filter(user => user.email === userEmail).length !== 0;
  }, [lastMessage, userEmail]);

  const lastMessageText = useMemo(() => {
    if (lastMessage?.image) return "sent an image";

    if (lastMessage?.body) return lastMessage.body;
    return "Started a conversation";
  }, [lastMessage]);
  console.log(otherUser, "===========================");

  return (
    <div
      className={clsx(
        "relative flex w-full cursor-pointer items-center space-x-3 p-3 text-neutral-100 transition-all hover:bg-neutral-950 hover:text-fuchsia-900",
        selected ? "bg-neutral-950" : "bg-neutral-900"
      )}
      onClick={handleClick}>
      <Avatar user={otherUser} />
      <div className="min-w-0 flex-1 hover:text-fuchsia-900">
        <div className="focus:outline-none">
          <div className="mb-1 flex items-center justify-between ">
            <p className="text-md font-medium text-neutral-100">
              {data.name || otherUser.name}
            </p>
            {lastMessage?.createdAt && (
              <p className="text-sx font-light">
                {format(new Date(lastMessage.createdAt), "p")}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConversationBox;
