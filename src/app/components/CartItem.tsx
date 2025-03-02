import Image from "next/image"
import { ICartItem } from "../interfaces"
import { IoMdClose } from "react-icons/io"
import { BiMinus, BiPlus } from "react-icons/bi"
import Link from "next/link"
import { discountedPrice } from "../utils"
import { useEffect, useState } from "react"
import { ImNewTab } from "react-icons/im"
import { useAppDispatch, useAppSelector } from "@/lib/hooks"
import { selectCart, setCartItems } from "@/lib/features/cartSlice"

interface IProps {
    cartItem: ICartItem
}

const CartItem = ({ cartItem }: IProps) => {

    const { cartItems } = useAppSelector(selectCart);
    const dispatch = useAppDispatch();

    const { id, title, price, discountPercentage, thumbnail, brand, qty, stock } = cartItem;

    const [counter, setCounter] = useState(qty);

    useEffect(() => {

        const newCartItems = cartItems.map((cartItem) => {
            if (id === cartItem.id) {
                return {...cartItem, qty: counter};
            }
            else return cartItem;
        })
        
        dispatch(setCartItems(newCartItems));

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [counter])

    const increment = () => {
        if (counter < stock) setCounter((prev) => prev + 1);
    };

    const decrement = () => {
        if (counter > 1) setCounter((prev) => prev - 1);
    }

    const removeCartItem = () => {
        const newCartItems = cartItems.filter((cartItem) => cartItem.id !== id);

        dispatch(setCartItems(newCartItems));
    }

    return (
        <li className="py-3 relative flex items-center flex-col lg:flex-row gap-3 border-t border-black">
            <Image
                src={thumbnail}
                alt={title}
                width={200}
                height={200}
            />
            <div className="w-full">
                <h2 className="text-2xl font-semibold flex justify-between gap-2 items-center">
                    {title}
                    <span onClick={() => removeCartItem()} className="cursor-pointer px-3 py-2 rounded hover:bg-gray-200 transition"><IoMdClose size={30} /></span>
                </h2>
                <p className="font-semibold mb-2">${discountedPrice(price, discountPercentage).toLocaleString()}</p>
                {brand && <p className="font-semibold mb-2">{brand}</p>}
                <Link href={`/products/${id}`} target="_blank" className="flex gap-2 items-center mb-5 underline">view product <ImNewTab /></Link>
                <div className="bg-gray-100 rounded-md py-3 w-fit flex justify-between items-center">
                    <button onClick={decrement} className="cursor-pointer px-3 flex items-center h-full"><BiMinus /></button>
                    <span className="select-none">{ counter }</span>
                    <button onClick={increment} className="cursor-pointer px-3 flex items-center h-full"><BiPlus /></button>
                </div>
            </div>
        </li>
    )
}

export default CartItem