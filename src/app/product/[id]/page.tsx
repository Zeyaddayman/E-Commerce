import AddToCart from "@/app/components/AddToCart";
import ImagesPreview from "@/app/components/ImagesPreview";
import RatingStars from "@/app/components/ui/RatingStars";
import { IProduct } from "@/app/interfaces";
import { discountedPrice } from "@/app/utils";

interface IProps {
    params: { id: string }
}

export default async function ProductPreview({ params }: IProps) {

    const { id } = params;

    const res = await fetch(`http://localhost:3000/api/product/${id}`, {cache: "no-store"});
    const data = await res.json();

    const { product } = data;

    const { title, brand, description, rating, price, discountPercentage, images }: IProduct = product;


    return (
        <>
        <div className="flex items-center flex-col md:flex-row md:px-16 py-8 gap-12 lg:gap-24">

            <ImagesPreview images={images} />

            <div className="flex flex-col flex-1 px-5 md:px-0">

                <h1 className="text-5xl font-bold my-10">{ title }</h1>
                <p>{description}</p>
                {brand && <p className="mt-4 font-semibold text-gray-700">{ brand }</p>}

                <div className="my-4 flex gap-2 items-center">
                    <span>{ rating }</span> <RatingStars rating={rating} />
                </div>

                {discountPercentage > 0 ?
                    <>
                    <div className="flex items-center gap-4">
                        <span className="text-2xl font-bold">${discountedPrice(price, discountPercentage).toLocaleString()}</span>
                        <span className="p-1 text-orange-500 bg-orange-100 rounded-md">{discountPercentage}%</span>
                    </div>
                    <p className="text-gray-400 line-through">${price.toLocaleString()}</p>
                    </>
                :
                    <span className="text-2xl font-bold">${price}</span>
                }

                <AddToCart product={product} />
            </div>
        </div>
        </>
    )
}