import AddToCart from "@/app/_components/AddToCart";
import ImagesPreview from "@/app/_components/ImagesPreview";
import GoBack from "@/app/_components/ui/GoBack";
import RatingStars from "@/app/_components/ui/RatingStars";
import { IProduct } from "@/app/_interfaces";
import { discountedPrice } from "@/app/_utils";

interface IProps {
    params: { id: string }
}

export default async function ProductPreview({ params }: IProps) {

    const { id } = params;

    const res = await fetch(`http://localhost:3000/api/product/${id}`, {cache: "no-store"});
    const data = await res.json();

    const { product } = data;

    const { title, brand, description, rating, price, discountPercentage, images, reviews }: IProduct = product;


    return (
        <>
        <div className="md:px-16 py-8">
            <GoBack />
            <div className="flex items-center flex-col md:flex-row gap-12 lg:gap-24">
                <ImagesPreview images={images} />

                <div className="flex flex-col flex-1 px-5 md:px-0">

                    <h1 className="text-5xl font-bold my-10">{ title }</h1>
                    <p>{description}</p>
                    {brand && <p className="mt-4 font-semibold text-gray-700">{ brand }</p>}

                    <div className="my-4 flex gap-2 items-center">
                        <span>{ rating }</span> <RatingStars rating={rating} size="lg" />
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
            <section className="py-10">
                <ul className="flex flex-col gap-3">
                    {reviews.map((review, i) => (
                        <li key={i} className="border-t border-gray-300 p-4">
                            <div>
                                <div className="mb-2 flex gap-3 flex-wrap">
                                    <span className="font-semibold">{review.reviewerName}</span>
                                    <span>{new Date(review.date).toDateString()}</span>
                                </div>
                                <RatingStars rating={review.rating} size="sm" />
                            </div>
                            <p className="mt-4 text-xl">{review.comment}</p>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
        </>
    )
}