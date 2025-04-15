"use client";

import { useState } from "react"
import { BiCartAdd, BiMinus, BiPlus } from "react-icons/bi";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { selectCart, setCartItems } from "@/lib/features/cartSlice";
import toast from "react-hot-toast";
import Button from "./ui/Button";
import { ICartItem, IProduct } from "../_interfaces";

interface IProps {
    product: IProduct
}

const AddToCart = ({ product }: IProps) => {

    const { cartItems } = useAppSelector(selectCart);
    const dispatch = useAppDispatch();

    const { stock } = product;

    const [counter, setCounter] = useState(1);

    const increment = () => {
        if (counter < stock) setCounter((prev) => prev + 1);
    };

    const decrement = () => {
        if (counter > 1) setCounter((prev) => prev - 1);
    }

    const addProductToCartHandler = () => {
        let exists = false;

        const newCartProducts = cartItems.map((item) => {
    
            if (item.id === product.id) {
                exists = true;
                const newItem = {...item, qty: item.qty + counter}
    
                return newItem;
    
            } else return item;
        })
    
        if (exists) {        
            dispatch(setCartItems(newCartProducts));
    
            toast.success("Added to your Cart.\nThis item already exists, the quantity will be increased");
    
        } else {

            const { id, title, category, price, discountPercentage, thumbnail, brand, rating } = product

            const newCartItem: ICartItem = {
                id,
                title,
                category,
                price,
                discountPercentage,
                thumbnail,
                brand,
                rating,
                qty: counter
            }

            dispatch(setCartItems([...newCartProducts, newCartItem]));

            toast.success("Added to your Cart.");
        }
    };

    return (
        <div className="flex justify-between gap-5 flex-col md:flex-row mt-10">
            <div className="bg-gray-100 rounded-md py-3 flex-1 flex justify-between items-center">
                <button onClick={decrement} className="cursor-pointer pl-2 flex items-center h-full"><BiMinus /></button>
                <span className="select-none">{counter}</span>
                <button onClick={increment} className="cursor-pointer pr-2 flex items-center h-full"><BiPlus /></button>
            </div>
            <Button onClick={addProductToCartHandler} className="bg-black text-white flex-1 flex items-center justify-around">
                <BiCartAdd size={25} />
                Add to cart
            </Button>
        </div>
    )
}

export default AddToCart;