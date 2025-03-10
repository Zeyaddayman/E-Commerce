import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient()

export async function GET(req: NextRequest,  { params }: { params: { category: string } }) {

    const { category } = params;

    const searchParams = new URLSearchParams(req.nextUrl.searchParams);

    const page = Number(searchParams.get("page")) || 1;

    const pageSize = 3;

    const productsCount = await prisma.product.count({
        where: { category }
    });

    const products = await prisma.product.findMany({
        where: { category },
        skip: (page - 1) * pageSize,
        take: pageSize,
        orderBy: {
            updatedAt: "asc"
        }
    });

    return NextResponse.json({
        products,
        total: productsCount,
        page,
        pageSize: products.length,
        maxPageSize: pageSize
    });
}