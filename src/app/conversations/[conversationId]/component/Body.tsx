"use client";

import { useEffect, useRef, useState } from "react";
import useConversation from "~/hooks/useConversation";
import { TypeFullMessage } from "~/types";
import MessageBox from "./MessageBox";
import axios from "axios";

const Body = ({ initialMessages }: { initialMessages: TypeFullMessage[] }) => {
  const [messages, setMessages] = useState(initialMessages);
  const bottomRef = useRef<HTMLDivElement>(null);
  const { conversationId } = useConversation();

  useEffect(() => {
    axios.post(`/api/conversations/${conversationId}/seen`);
  }, [conversationId]);

  return (
    <div className="flex-1 overflow-y-auto">
      {messages.map((message, index) => (
        <MessageBox
          isLast={index === messages.length - 1}
          key={message.id}
          data={message}
        />
      ))}
      <div ref={bottomRef} className="pt-24" />
    </div>
  );
};

export default Body;
