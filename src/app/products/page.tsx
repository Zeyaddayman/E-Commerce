import Paginator from "../components/Paginator";
import ProductCard from "../components/ProductCard";
import { IProduct } from "../interfaces";

interface IProps {
    searchParams: { page: number | undefined }
}

export default async function ProductsPage({ searchParams }: IProps) {

    const page = searchParams.page || 1;

    const res = await fetch(`http://localhost:3000/api/products/?page=${page}`, {cache: "no-store"});

    const data: { products: IProduct[], total: number, page: number, pageSize: number, maxPageSize: number } = await res.json();

    return (
        <main className="p-10 md:p-16 mx-auto">
            <div className="flex flex-wrap gap-5 justify-center">
                {data.products.map(( product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
            {(data.total > data.pageSize) && 
                <Paginator
                    page={data.page}
                    paginationPages={Math.ceil(data.total / data.maxPageSize)}
                />
            }
        </main>
    )
}