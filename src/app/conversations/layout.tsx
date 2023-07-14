import Sidebar from "~/components/Sidebar";
import ConversationsList from "./component/ConversationsList";
import getConversations from "~/actions/getConversations";
import getUsers from "~/actions/getUsers";

export default async function ConversationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const conversations = await getConversations();
  const users = await getUsers();
  return (
    <Sidebar>
      <div className="h-full">
        <ConversationsList conversations={conversations} users={users} />
        {children}
      </div>
    </Sidebar>
  );
}
