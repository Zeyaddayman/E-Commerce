import Image from "next/image";
import { IProduct } from "../interfaces";
import Link from "next/link";
import { discountedPrice, shortText } from "../utils";
import RatingStars from "./ui/RatingStars";

interface IProps {
    product: IProduct;
}

const ProductCard = ({ product }: IProps) => {

    const { id, title, description, price, discountPercentage, thumbnail, brand, rating  } = product;

    return (
        <div className="border border-gray-200 p-4 w-[350px] rounded-md">
            <Link href={`products/${id}`} className="mb-4">
                <Image
                    src={thumbnail}
                    alt={title}
                    width={350}
                    height={350}
                />
            </Link>
            <div className="mt-3 flex flex-col gap-3">
                <p className="font-semibold">{ title }</p>
                <p>{ shortText(description ? description : "") }</p>
                {brand && <p className="font-semibold text-gray-700">{ brand }</p>}
                <div className="flex gap-2 items-center">
                    <span>{ rating }</span> <RatingStars rating={rating} />
                </div>
                <p className="flex justify-between items-center">
                    <span className="text-xl">${ discountedPrice(price, discountPercentage).toLocaleString() }</span>
                    <span className="text-gray-400 line-through">${ price.toLocaleString() }</span>
                </p>
            </div>
        </div>
    )
}

export default ProductCard