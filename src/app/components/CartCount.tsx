"use client";

import { selectCart } from "@/lib/features/cartSlice"
import { useAppSelector } from "@/lib/hooks"

const CartCount = () => {

    const { count } = useAppSelector(selectCart);

    return <>{ count }</>
}

export default CartCount