"use client";

import { selectCart } from "@/lib/features/cartSlice"
import { useAppSelector } from "@/lib/hooks"

const CartAmount = () => {

    const { amount } = useAppSelector(selectCart);

    return <>{ amount }</>
}

export default CartAmount