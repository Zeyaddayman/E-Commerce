import Image from "next/image"
import { ICartItem } from "../_interfaces"
import { IoMdClose } from "react-icons/io"
import { BiMinus, BiPlus } from "react-icons/bi"
import Link from "next/link"
import { discountedPrice } from "../_utils"
import { useEffect, useState } from "react"
import { ImNewTab } from "react-icons/im"
import { useAppDispatch, useAppSelector } from "@/lib/hooks"
import { selectCart, setCartItems } from "@/lib/features/cartSlice"
import Button from "./ui/Button"
import toast from "react-hot-toast"

interface IProps {
    cartItem: ICartItem
}

const CartItem = ({ cartItem }: IProps) => {

    const { cartItems } = useAppSelector(selectCart);
    const dispatch = useAppDispatch();

    const { id, title, price, discountPercentage, thumbnail, brand, qty } = cartItem;

    const [counter, setCounter] = useState(qty);
    const [updating, setUpdating] = useState(false);
    const [deleting, setDeleting] = useState(false);

    const [showUpdateBtn, setShowUpdateBtn] = useState(false);

    useEffect(() => {
        if (counter !== qty) {
            setShowUpdateBtn(true);
        } else {
            setShowUpdateBtn(false);
        }
    }, [counter, qty])

    const updateQtyHandler = async () => {
        setUpdating(true);
        const res = await fetch(`http://localhost:3000/api/checkStock/${id}`, {
            cache: "no-store"
        })
        const productStock: number = await res.json()
        setUpdating(false);

        let newQty = counter;
        
        if (newQty > productStock) {
            toast.error("This quantity is not available.")
            newQty = productStock;
        }

        const newCartItems = cartItems.map((cartItem) => {
            if (cartItem.id === id) {
                return {
                    ...cartItem,
                    qty: newQty
                }
            } else return cartItem;
        });

        dispatch(setCartItems(newCartItems));
        setCounter(newQty);
    }

    const removeCartItem = () => {
        setDeleting(true);
        setTimeout(() => {
            const newCartItems = cartItems.filter((cartItem) => cartItem.id !== id);

            dispatch(setCartItems(newCartItems));
        }, 700);
    }

    const increment = () => {
        setCounter((prev) => prev + 1);
    };

    const decrement = () => {
        if (counter > 1) setCounter((prev) => prev - 1);
    }

    return (
        <li className={`${deleting && "opacity-20 -translate-x-1/2"} py-3 relative flex items-center flex-col lg:flex-row gap-3 border-t border-black duration-700`}>
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
                <Link href={`/product/${id}`} target="_blank" className="flex gap-2 items-center mb-5 underline">view product <ImNewTab /></Link>
                <div className="flex items-center gap-2 flex-wrap">
                    <div className="bg-gray-100 rounded-md py-3 w-fit flex justify-between items-center">
                        <button onClick={decrement} className="cursor-pointer px-3 flex items-center h-full"><BiMinus /></button>
                        <span className="select-none">{ counter }</span>
                        <button onClick={increment} className="cursor-pointer px-3 flex items-center h-full"><BiPlus /></button>
                    </div>
                    {showUpdateBtn && (
                        <Button
                            onClick={updateQtyHandler}
                            className="bg-gray-500 text-white rounded-full"
                            isLoading={updating}
                            disabled={updating}
                        >
                            {!updating && "Update"}
                        </Button>
                    )}
                </div>
            </div>
        </li>
    )
}

export default CartItem