import { PrismaClient } from "@prisma/client";
import Link from "next/link";

const prisma = new PrismaClient()

export default async function Home() {
    const products = await prisma.product.findMany({
        select: {
            category: true
        }
    })

    const productsCategories: { [category: string]: number } = {}

    for (let i = 0; i < products.length; i++) {
        productsCategories[products[i].category] = productsCategories[products[i].category] + 1 || 1
    }

    return (
        <>
        {Object.keys(productsCategories).map((category) => (
            <Link key={category} href={category} className="block">
                {category} : {productsCategories[category]}
            </Link>
        ))}
        </>
    )
}