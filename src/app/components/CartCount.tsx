"use client";

import { selectCart } from "@/lib/features/cartSlice"
import { useAppSelector } from "@/lib/hooks"

const CartCount = () => {

    const { cartItems } = useAppSelector(selectCart);

    return <>{ cartItems.length }</>
}

export default CartCount