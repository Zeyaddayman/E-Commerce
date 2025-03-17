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
    reviews: Review[];
    createdAt: Date;
    updatedAt: Date
}

type Dimensions = {
    width: number
    height: number
    depth: number | undefined
}

export type Review = {
    rating: number
    comment: string
    date: Date
    reviewerName: string
    reviewerEmail: string
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