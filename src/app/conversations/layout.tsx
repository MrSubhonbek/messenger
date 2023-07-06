import Sidebar from "~/components/Sidebar";
import ConversationsList from "./component/ConversationsList";
import getConversations from "~/actions/getConversations";

export default async function ConversationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const conversations = await getConversations();
  return (
    <Sidebar>
      <div className="h-full">
        <ConversationsList conversations={conversations} />
        {children}
      </div>
    </Sidebar>
  );
}
