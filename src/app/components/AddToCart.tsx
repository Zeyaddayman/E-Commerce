"use client";

import { useState } from "react"
import { IProduct } from "../interfaces"
import { BiCartAdd, BiMinus, BiPlus } from "react-icons/bi";

interface IProps {
    product: IProduct
}

const AddToCart = ({ product }: IProps) => {

    const { stock } = product;

    const [counter, setCounter] = useState(1);

    const increment = () => {
        if (counter < stock) setCounter((prev) => prev + 1);
    };

    const decrement = () => {
        if (counter > 1) setCounter((prev) => prev - 1);
    }

    const addProductToCart = () => {};

    return (
        <div className="flex justify-between gap-5 flex-col md:flex-row mt-10">
            <div className="bg-gray-100 rounded-md py-3 flex-1 flex justify-between items-center">
                <button onClick={decrement} className="cursor-pointer pl-2 flex items-center h-full text-orange-500"><BiMinus /></button>
                <span className="select-none">{counter}</span>
                <button onClick={increment} className="cursor-pointer pr-2 flex items-center h-full text-orange-500"><BiPlus /></button>
            </div>
            <button onClick={addProductToCart} className="bg-orange-500 text-white rounded-md py-3 flex-1 flex justify-around items-center">
                <BiCartAdd size={25} />
                Add to cart
            </button>
        </div>
    )
}

export default AddToCart;