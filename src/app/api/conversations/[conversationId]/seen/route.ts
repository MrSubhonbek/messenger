import { NextResponse } from "next/server";
import getCurrentUser from "~/actions/getCurrentUser";
import prisma from "~/libs/prismadb";

type TypeParams = {
  conversationId?: string;
};

export async function POST(
  request: Request,
  { params }: { params: TypeParams }
) {
  try {
    const currentUser = await getCurrentUser();
    const { conversationId } = params;
    if (!currentUser?.email || !currentUser.id)
      return new NextResponse("Unauthorized", { status: 401 });

    const conversation = await prisma.converasation.findUnique({
      where: {
        id: conversationId,
      },
      include: {
        messages: {
          include: {
            seen: true,
          },
        },
        user: true,
      },
    });

    if (!conversation) return new NextResponse("Invalid Id", { status: 400 });

    const lastMessage = conversation.messages[conversation.messages.length - 1];
    if (!lastMessage) return NextResponse.json(conversation);

    const updateMessage = await prisma.message.update({
      where: {
        id: lastMessage.id,
      },
      include: {
        sender: true,
        seen: true,
      },
      data: {
        seen: {
          connect: {
            id: currentUser.id,
          },
        },
      },
    });
    return NextResponse.json(updateMessage);
  } catch (e) {
    console.log(e, "ERROR_MESSAGE_SEEN");
    return new NextResponse("Internal Error", { status: 500 });
  }
}
