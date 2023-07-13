import getConversationById from "~/actions/getConversationById";
import getMessage from "~/actions/getMessages";
import EmptyState from "~/components/EmptyState";
import Header from "./component/Header";
import Body from "./component/Body";
import Form from "./component/Form";

type TypeParams = {
  conversationId: string;
};

const ConversationId = async ({ params }: { params: TypeParams }) => {
  const conversation = await getConversationById(params.conversationId);
  const messages = await getMessage(params.conversationId);

  if (!conversation)
    return (
      <div className="h-full lg:pl-80">
        <div className="flex h-full flex-col">
          <EmptyState />
        </div>
      </div>
    );

  return (
    <div className="h-full lg:pl-80">
      <div className="flex h-full flex-col text-neutral-100">
        <Header conversation={conversation} />
        <Body initialMessages={messages} />
        <Form />
      </div>
    </div>
  );
};

export default ConversationId;
