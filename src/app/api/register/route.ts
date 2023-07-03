import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

import prisma from "~/libs/prismadb";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, name, password } = body;

    if (!email || !name || !password)
      return new NextResponse("Missing info ", { status: 400 });

    const salt = 12;
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = await prisma.user.create({
      data: {
        email,
        name,
        hashedPassword,
      },
    });

    return NextResponse.json(user);
  } catch (e) {
    console.log(e, "REGISTRATION_ERROR");
    return new NextResponse("Internal Error", { status: 500 });
  }
}
