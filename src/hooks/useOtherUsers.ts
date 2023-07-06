import { User } from "@prisma/client";
import { useSession } from "next-auth/react";
import { useMemo } from "react";
import { TypeFullConversation } from "~/types";

const useOtherUser = (
  conversation: { user: User[] } | TypeFullConversation
) => {
  const session = useSession();

  const otherUser = useMemo(() => {
    const currentUserEmail = session.data?.user?.email;

    const otherUser = conversation.user.filter(
      user => user.email !== currentUserEmail
    );

    return otherUser[0];
  }, [session.data?.user?.email, conversation]);
  return otherUser;
};

export default useOtherUser;
