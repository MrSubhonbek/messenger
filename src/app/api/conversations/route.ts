import { NextResponse } from "next/server";

import getCurrentUser from "~/actions/getCurrentUser";
import prisma from "~/libs/prismadb";

export async function POST(request: Request) {
  try {
    const currentUser = await getCurrentUser();
    const body = await request.json();
    const { userId, isGroup, members, name } = body;

    if (!currentUser?.id || !currentUser?.email)
      return new NextResponse("Unauthorized", { status: 401 });

    if (isGroup && (!members || members < 2 || !name))
      return new NextResponse("Invalid Data", { status: 400 });

    if (isGroup) {
      const newConversation = await prisma.converasation.create({
        data: {
          name,
          isGroup,
          user: {
            connect: [
              ...members.map((member: { value: string }) => ({
                id: member.value,
              })),
              {
                id: currentUser.id,
              },
            ],
          },
        },
        include: {
          user: true,
        },
      });

      return NextResponse.json(newConversation);
    }

    const existingConversation = await prisma.converasation.findMany({
      where: {
        OR: [
          {
            userIds: {
              equals: [currentUser.id, userId],
            },
          },
          {
            userIds: {
              equals: [userId, currentUser.id],
            },
          },
        ],
      },
    });

    const singleConversation = existingConversation[0];
    if (singleConversation) return NextResponse.json(singleConversation);

    const newConversation = await prisma.converasation.create({
      data: {
        user: {
          connect: [
            {
              id: currentUser.id,
            },
            {
              id: userId,
            },
          ],
        },
      },
      include: {
        user: true,
      },
    });
    return NextResponse.json(newConversation);
  } catch (e) {
    return new NextResponse("Internal Error", { status: 500 });
  }
}
