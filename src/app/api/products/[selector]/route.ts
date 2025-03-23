import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient()

export async function GET(req: NextRequest,  { params }: { params: { selector: string } }) {

    const { selector } = params;

    const searchParams = new URLSearchParams(req.nextUrl.searchParams);

    const page = Number(searchParams.get("page")) || 1;

    const pageSize = 3;

    const productsCount = await prisma.product.count({
        where: {
            OR: [
                { category: selector },
                { tag: selector }
            ]
        }
    });

    const products = await prisma.product.findMany({
        where: {
            OR: [
                { category: selector },
                { tag: selector }
            ]
        },
        skip: (page - 1) * pageSize,
        take: pageSize,
    });

    return NextResponse.json({
        products,
        total: productsCount,
        page,
        pageSize: products.length,
        maxPageSize: pageSize
    });
}