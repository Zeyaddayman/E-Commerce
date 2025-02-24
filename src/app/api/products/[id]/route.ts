import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient()

export async function GET(req: NextRequest,  { params }: { params: { id: string } }) {

    const { id } = params

    const product = await prisma.product.findFirst({
        where: {
            id
        }
    });

    return NextResponse.json({ product });
}