import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

const prisma = new PrismaClient()

export async function POST(req: Request) {

    const body = await req.json();

    const { email, password } = body;

    if (!email || !password) {
        return new NextResponse("Missing email or password", { status: 400 });
    }

    const user = await prisma.user.findUnique({
        where: { email }
    })

    const passwordsMatch = await bcrypt.compare(password, user?.hashedPassword ? user.hashedPassword : "");

    if (!user || !passwordsMatch) return new NextResponse("email or password is incorrect", { status: 400 });

    const token = jwt.sign(user, process.env.JWT_SECRET_KEY as string, {
        expiresIn: '24h',
    });

    return NextResponse.json(token);
}