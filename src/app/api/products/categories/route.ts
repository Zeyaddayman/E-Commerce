import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient()

export async function GET() {

    const products = await prisma.product.findMany({});

    const categoriesHash: { [key: string]: number } = {};

    for (let i = 0; i < products.length; i++) {
        categoriesHash[products[i].category] = categoriesHash[products[i].category] + 1 || 1;
    }

    const categories = Object.keys(categoriesHash);

    return NextResponse.json({ categories });
}