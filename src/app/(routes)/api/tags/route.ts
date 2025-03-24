import { ITag } from "@/app/_interfaces";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient()

export async function GET() {

    const products = await prisma.product.findMany({});

    const tags: ITag[] = []
    const tagsNames: { [tagName: string]: string } = {}
    const categoriesNames: { [categoryName: string]: string } = {}

    for (let i = 0; i < products.length; i++) {
        const currentTag = products[i].tag
        const currentCategory = products[i].category

        if (tagsNames[currentTag] === undefined) {
            const newTag: ITag = {
                tagName: currentTag,
                categories: [{
                    categoryName: currentCategory,
                    categoryThumbnail: `/${currentCategory}.jpg`
                }]
            }
            tags.push(newTag)
            tagsNames[currentTag] = currentTag
            categoriesNames[currentCategory] = currentCategory

        } else {
            
            if (categoriesNames[currentCategory] === undefined) {
                for (let j = 0; j < tags.length; j++) {
                    if (currentTag === tags[j].tagName) {

                        const newTag: ITag = {
                            tagName: tags[j].tagName,
                            categories: [...tags[j].categories, {
                                categoryName: currentCategory,
                                categoryThumbnail: `/${currentCategory}.jpg`
                            }]
                        }

                        tags[j] = newTag
                    }
                }
                categoriesNames[currentCategory] = currentCategory
            }
        }
    }

    return NextResponse.json(tags)
}