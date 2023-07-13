"use client";
import clsx from "clsx";
import { format } from "date-fns";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Avatar from "~/components/Avatar";
import { TypeFullMessage } from "~/types";

type TypeMessageBoxProps = {
  isLast?: boolean;
  data: TypeFullMessage;
};
const MessageBox = ({ data, isLast }: TypeMessageBoxProps) => {
  const session = useSession();
  const isOwn = session.data?.user?.email === data?.sender?.email;
  const seenList = (data.seen || [])
    .filter(user => user.email! == data.sender.email)
    .map(user => user.name)
    .join(", ");

  return (
    <div className={clsx("flex gap-3 p-4", isOwn && "justify-end")}>
      <div className={clsx(isOwn && "order-2")}>
        <Avatar user={data.sender} />
      </div>
      <div className={clsx("flex flex-col gap-2", isOwn && "items-end")}>
        <div className="flex items-center gap-1">
          <div className="text-sm text-neutral-100">{data.sender.name}</div>
          <div className="text-xs">{format(new Date(data.createdAt), "p")}</div>
        </div>
        <div
          className={clsx(
            "w-fit overflow-hidden text-sm",
            isOwn ? "bg-neutral-950 text-neutral-100" : "bg-neutral-950",
            data?.image ? "p-0" : "px-3 py-2"
          )}>
          {data.image ? (
            <Image
              alt="image"
              height={288}
              width={288}
              src={data.image}
              className="object-cover transition-all hover:scale-110"
            />
          ) : (
            <div>{data.body}</div>
          )}
        </div>
        {isLast && isOwn && seenList.length > 0 && (
          <div className="text-xs font-light text-fuchsia-900">{`Seen by ${seenList}`}</div>
        )}
      </div>
    </div>
  );
};

export default MessageBox;
