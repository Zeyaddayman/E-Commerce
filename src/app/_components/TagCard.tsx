import Image from "next/image"
import { ITag } from "../_interfaces"
import Link from "next/link"

interface IProps {
    tag: ITag
}

const TagCard = ({ tag }: IProps) => {

    const { tagName, categories } = tag

    return (
        <div className="relative border border-gray-200 p-4 pb-8 rounded-md shadow-md">
            <h3 className="text-2xl font-bold mb-4">{ tagName }</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {categories.map((category) => {
                    return (
                        <Link href={`${category.categoryName}`} key={category.categoryName}>
                            <Image
                                src={category.categoryThumbnail}
                                alt={`${category.categoryName} thumbnail`}
                                width={186}
                                height={116}
                                priority
                                quality={100}
                            />
                            <p>{ category.categoryName }</p>
                        </Link>
                    )
                })}
            </div>
            <Link href={`${tagName}`} className="absolute left-4 bottom-4 text-blue-800">Explore More</Link>
        </div>
    )
}

export default TagCard