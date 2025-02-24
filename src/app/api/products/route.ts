import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient()

export async function GET(req: NextRequest) {

    const searchParams = new URLSearchParams(req.nextUrl.searchParams);

    const page = Number(searchParams.get("page")) || 1;

    const pageSize = 15;

    const productsCount = await prisma.product.findMany({});

    const products = await prisma.product.findMany({
        skip: (page - 1) * pageSize,
        take: pageSize,
        orderBy: {
            updatedAt: "asc"
        }
    });

    return NextResponse.json({
        products,
        total: productsCount.length,
        page,
        pageSize: products.length,
        maxPageSize: pageSize
    });

}