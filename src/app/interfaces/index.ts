export interface IProduct {
    id: string;
    title: string;
    description?: string;
    price: number;
    category: string;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    weight: number;
    images: string[];
    thumbnail: string;
    dimensions: Dimensions;
    createdAt: Date;
    updatedAt: Date
}

type Dimensions = {
    width: number
    height: number
    depth: number | undefined
}