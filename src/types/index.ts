import { Converasation, User, Message } from "@prisma/client";

export type TypeFullMessage = Message & {
  sender: User;
  seen: User[];
};

export type TypeFullConversation = Converasation & {
  user: User[];
  messages: TypeFullMessage[];
};
