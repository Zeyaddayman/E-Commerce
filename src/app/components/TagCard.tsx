import Image from "next/image"
import { ITag } from "../interfaces"
import Link from "next/link"

interface IProps {
    tag: ITag
}

const TagCard = ({ tag }: IProps) => {

    const { tagName, categories } = tag

    const imageWidth = 155

    return (
        <div className="relative border border-gray-200 p-4 pb-8 w-[360px] rounded-md shadow-md">
            <h3 className="text-2xl font-bold mb-4">{ tagName }</h3>
            <div className="flex gap-4 flex-wrap sm:justify-between justify-center mb-6">
                {categories.map((category) => {
                    return (
                        <Link href={category.categoryName} key={category.categoryName}>
                            <Image
                                src={category.categoryThumbnail}
                                alt={`${category.categoryName} thumbnail`}
                                width={imageWidth}
                                height={imageWidth}
                            />
                            <p>{ category.categoryName }</p>
                        </Link>
                    )
                })}
            </div>
            {/* <Link href={tagName} className="absolute left-4 bottom-4 text-blue-800">Explore More</Link> */}
        </div>
    )
}

export default TagCard