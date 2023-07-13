import { NextResponse } from "next/server";
import getCurrentUser from "~/actions/getCurrentUser";
import prisma from "~/libs/prismadb";

type TypeParams = {
  conversationId?: string;
};
export async function DELETE(
  request: Request,
  { params }: { params: TypeParams }
) {
  try {
    const { conversationId } = params;
    const currentUser = await getCurrentUser();

    if (!currentUser) return new NextResponse("Unauthorized", { status: 401 });

    const existConversation = await prisma.converasation.findUnique({
      where: {
        id: conversationId,
      },
      include: {
        user: true,
      },
    });

    if (!existConversation)
      return new NextResponse("Invalid Id", { status: 400 });

    const deleteConversation = await prisma.converasation.deleteMany({
      where: {
        id: conversationId,
        userIds: {
          hasSome: [currentUser.id],
        },
      },
    });
    return NextResponse.json(deleteConversation);
  } catch (e) {
    console.log(e, "ERROR_CONVERSATION_DELETE");
    return new NextResponse("Internal Error", { status: 500 });
  }
}
