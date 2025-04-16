"use client";

import { useEffect, useState } from "react"
import { BiCartAdd, BiMinus, BiPlus } from "react-icons/bi";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { selectCart, setCartItems } from "@/lib/features/cartSlice";
import toast from "react-hot-toast";
import Button from "./ui/Button";
import { ICartItem, IProduct } from "../_interfaces";
import Link from "next/link";

interface IProps {
    product: IProduct
}

const AddToCart = ({ product }: IProps) => {

    const { cartItems } = useAppSelector(selectCart);
    const dispatch = useAppDispatch();

    const { stock } = product;

    const [counter, setCounter] = useState(1);
    const [productInCart, setProductInCart] = useState(false);

    const addToCartText = productInCart ? "Update Quantity" : "Add to cart";

    useEffect(() => {
        const exists = cartItems.find((item) => item.id === product.id);

        if (exists) {
            setCounter(exists.qty);
            setProductInCart(true);
        }
    }, [cartItems, product.id]);

    const increment = () => {
        if (counter < stock) setCounter((prev) => prev + 1)
        else toast.error("You can't add more than available stock");
    };

    const decrement = () => {
        if (counter > 1) setCounter((prev) => prev - 1)
    }

    const addProductToCartHandler = () => {
        if (productInCart) {
            const updatedCartItems = cartItems.map((item: ICartItem) => {
                if (item.id === product.id) {
                    return { ...item, qty: counter };
                }
                return item;
            });
            dispatch(setCartItems(updatedCartItems));
            toast.success("Product quantity updated in cart");
        } else {
            dispatch(setCartItems([...cartItems, { ...product, qty: counter }]));
            toast.success("Product added to cart");
        }
    };

    return (
        <div className="mt-6">
            {productInCart && (
                <div className="flex flex-col mb-4">
                    <span className="text-lg text-green-500">Already in cart</span>
                    <Link href="/cart" className="text-sm text-blue-500 hover:underline">Go to cart</Link>
                </div>
            )}

            <div className="flex justify-between gap-5 flex-col md:flex-row">
                <div className="bg-gray-100 rounded-md py-3 flex-1 flex justify-between items-center">
                    <button onClick={decrement} className="cursor-pointer pl-2 flex items-center h-full"><BiMinus /></button>
                    <span className="select-none">{counter}</span>
                    <button onClick={increment} className="cursor-pointer pr-2 flex items-center h-full"><BiPlus /></button>
                </div>
                <Button onClick={addProductToCartHandler} className="bg-black text-white flex-1 flex items-center justify-around">
                    <BiCartAdd size={25} />
                    {addToCartText}
                </Button>
            </div>
        </div>
    )
}

export default AddToCart;