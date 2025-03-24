import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

const prisma = new PrismaClient()

export async function POST(req: Request) {
    const body = await req.json();

    const { name, email, password } = body;

    if (!name || !email || !password) {
        return new NextResponse("Missing name or email or password", { status: 400 });
    }

    const exist = await prisma.user.findUnique({
        where: {email}
    })

    if (exist) {
        return new NextResponse("User already exists", { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
        data: {
            name,
            email,
            role: "USER",
            hashedPassword
        }
    })

    const token = jwt.sign(user , process.env.JWT_SECRET_KEY as string, {
        expiresIn: '24h',
    });

    return NextResponse.json(token);
}