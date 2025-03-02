export interface IProduct {
    id: string;
    title: string;
    description?: string;
    price: number;
    discountPercentage: number;
    category: string;
    rating: number;
    stock: number;
    brand?: string;
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

export interface ICartItem {
    id: string;
    title: string;
    price: number;
    discountPercentage: number;
    category: string;
    brand?: string;
    thumbnail: string;
    rating: number;
    stock: number;
    qty: number
}