"use client";

import { selectCart, setCartItems } from "@/lib/features/cartSlice"
import { useAppDispatch, useAppSelector } from "@/lib/hooks"
import { useEffect } from "react";

const CartCount = () => {

    const { cartItems } = useAppSelector(selectCart);
    const dispatch = useAppDispatch()

    useEffect(() => {
        const localStorageCart = localStorage.getItem("cart");
        const products = localStorageCart ? JSON.parse(localStorageCart) : [];

        dispatch(setCartItems(products))
        
    }, [dispatch])

    return <>{ cartItems.length }</>
}

export default CartCount