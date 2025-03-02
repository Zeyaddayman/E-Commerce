"use client";

import Button from "../components/ui/Button";
import { useAppSelector } from "@/lib/hooks";
import { selectCart } from "@/lib/features/cartSlice";
import CartItem from "../components/CartItem";
import { discountedPrice } from "../utils";
import Cookies from "universal-cookie"
import toast from "react-hot-toast";

const CartPage = () => {

    const { cartItems } = useAppSelector(selectCart);

    const getTotalPrice = () => {
        let totalPrice = 0;
        for (let i = 0; i < cartItems.length; i++) {
            totalPrice += discountedPrice(cartItems[i].price, cartItems[i].discountPercentage) * cartItems[i].qty;
        }
        return totalPrice;
    }

    const getTotalItems = () => {
        let totalItems = 0;
        for (let i = 0; i < cartItems.length; i++) {
            totalItems += cartItems[i].qty;
        }
        return totalItems;
    }

    const checkout = () => {
        const cookies = new Cookies();
        if (!cookies.get("authToken")) {
            return toast.error("You must sign in.");
        }
        toast.error("La2 tshtry eh 7adrtk de fake data");
    }

    return (
        <div className="py-10 px-10 md:px-16 mx-auto">
            <h1 className="text-4xl font-bold text-center mb-12">SHOPPING CART</h1>
            {cartItems.length
                ?
                <div className="flex gap-8 justify-between flex-col-reverse lg:flex-row">
                    <ul className="flex-1 lg:flex-[0.6]">
                        {cartItems.toReversed().map((cartItem) => <CartItem key={cartItem.id} cartItem={cartItem} />)}
                    </ul>
                    <div className="flex-1 lg:flex-[0.3] h-fit border border-black">
                        <h2 className="text-2xl font-semibold py-5 text-center border-b border-black">ORDER SUMMARY</h2>
                        <div className="flex flex-col">
                            <p className="flex justify-between py-3 px-3">SUBTOTAL {`(${getTotalItems()} item${getTotalItems() > 1 ? "s": ""})`} <span>${getTotalPrice().toLocaleString()}</span></p>
                            <p className="flex justify-between py-3 px-3">SHIPPING <span>$0</span></p>
                            <p className="flex justify-between py-3 px-3 border-y border-black">TOTAL <span>${getTotalPrice().toLocaleString()}</span></p>
                        </div>
                        <Button onClick={checkout} className="py-5 w-full hover:text-white hover:bg-black transition">Check Out</Button>
                    </div>
                </div>
                :
                <h3 className="text-2xl">Your Cart Is Empty.</h3>
            }
        </div>
    )
}

export default CartPage