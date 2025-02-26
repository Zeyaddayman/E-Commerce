"use client";

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { BiMinus, BiPlus } from "react-icons/bi"
import { ImNewTab } from "react-icons/im"
import { IoMdClose } from "react-icons/io"
import Button from "../components/ui/Button";

const CartPage = () => {

    const [counter, setCounter] = useState(1);
    
    const increment = () => {
        setCounter((prev) => prev + 1);
    };
    
    const decrement = () => {
        if (counter > 1) setCounter((prev) => prev - 1);
    }

    return (
        <div className="p-10 md:p-16 mx-auto">
            <h1 className="text-4xl font-bold text-center mb-12">SHOPPING CART</h1>
            <div className="flex gap-8 justify-between flex-col-reverse lg:flex-row">
                <ul className="flex-1 lg:flex-[0.6]">
                    <li className="py-3 relative flex items-center flex-col lg:flex-row gap-3 border-t border-black">
                        <Image
                            src={"https://cdn.dummyjson.com/products/images/womens-bags/Blue%20Women's%20Handbag/thumbnail.png"}
                            alt="Blue Women's Handbag"
                            width={200}
                            height={200}
                        />
                        <div className="w-full">
                            <h2 className="text-2xl font-semibold flex justify-between gap-2 items-center">
                                Blue Women&apos;s Handbag
                                <span className="cursor-pointer px-3 py-2 rounded hover:bg-gray-200 transition"><IoMdClose size={30} /></span>
                            </h2>
                            <p className="font-semibold mb-2">$47.371</p>
                            <p className="font-semibold mb-2">Fashionista</p>
                            <Link href={"/products/679f85d9375cda88f6fe8b80"} target="_blank" className="flex gap-2 items-center mb-5 underline">view product <ImNewTab /></Link>
                            <div className="bg-gray-100 rounded-md py-3 w-fit flex justify-between items-center">
                                <button onClick={decrement} className="cursor-pointer px-3 flex items-center h-full"><BiMinus /></button>
                                <span className="select-none">{ counter }</span>
                                <button onClick={increment} className="cursor-pointer px-3 flex items-center h-full"><BiPlus /></button>
                            </div>
                        </div>
                    </li>
                    <li className="py-3 relative flex items-center flex-col lg:flex-row gap-3 border-t border-black">
                        <Image
                            src={"https://cdn.dummyjson.com/products/images/womens-bags/Blue%20Women's%20Handbag/thumbnail.png"}
                            alt="Blue Women's Handbag"
                            width={200}
                            height={200}
                        />
                        <div className="w-full">
                            <h2 className="text-2xl font-semibold flex justify-between gap-2 items-center">
                                Blue Women&apos;s Handbag
                                <span className="cursor-pointer px-3 py-2 rounded hover:bg-gray-200 transition"><IoMdClose size={30} /></span>
                            </h2>
                            <p className="font-semibold mb-2">$47.371</p>
                            <p className="font-semibold mb-2">Fashionista</p>
                            <Link href={"/products/679f85d9375cda88f6fe8b80"} target="_blank" className="flex gap-2 items-center mb-5 underline">view product <ImNewTab /></Link>
                            <div className="bg-gray-100 rounded-md py-3 w-fit flex justify-between items-center">
                                <button onClick={decrement} className="cursor-pointer px-3 flex items-center h-full"><BiMinus /></button>
                                <span className="select-none">{ counter }</span>
                                <button onClick={increment} className="cursor-pointer px-3 flex items-center h-full"><BiPlus /></button>
                            </div>
                        </div>
                    </li>
                    <li className="py-3 relative flex items-center flex-col lg:flex-row gap-3 border-t border-black">
                        <Image
                            src={"https://cdn.dummyjson.com/products/images/womens-bags/Blue%20Women's%20Handbag/thumbnail.png"}
                            alt="Blue Women's Handbag"
                            width={200}
                            height={200}
                        />
                        <div className="w-full">
                            <h2 className="text-2xl font-semibold flex justify-between gap-2 items-center">
                                Blue Women&apos;s Handbag
                                <span className="cursor-pointer px-3 py-2 rounded hover:bg-gray-200 transition"><IoMdClose size={30} /></span>
                            </h2>
                            <p className="font-semibold mb-2">$47.371</p>
                            <p className="font-semibold mb-2">Fashionista</p>
                            <Link href={"/products/679f85d9375cda88f6fe8b80"} target="_blank" className="flex gap-2 items-center mb-5 underline">view product <ImNewTab /></Link>
                            <div className="bg-gray-100 rounded-md py-3 w-fit flex justify-between items-center">
                                <button onClick={decrement} className="cursor-pointer px-3 flex items-center h-full"><BiMinus /></button>
                                <span className="select-none">{ counter }</span>
                                <button onClick={increment} className="cursor-pointer px-3 flex items-center h-full"><BiPlus /></button>
                            </div>
                        </div>
                    </li>
                    <li className="py-3 relative flex items-center flex-col lg:flex-row gap-3 border-t border-black">
                        <Image
                            src={"https://cdn.dummyjson.com/products/images/womens-bags/Blue%20Women's%20Handbag/thumbnail.png"}
                            alt="Blue Women's Handbag"
                            width={200}
                            height={200}
                        />
                        <div className="w-full">
                            <h2 className="text-2xl font-semibold flex justify-between gap-2 items-center">
                                Blue Women&apos;s Handbag
                                <span className="cursor-pointer px-3 py-2 rounded hover:bg-gray-200 transition"><IoMdClose size={30} /></span>
                            </h2>
                            <p className="font-semibold mb-2">$47.371</p>
                            <p className="font-semibold mb-2">Fashionista</p>
                            <Link href={"/products/679f85d9375cda88f6fe8b80"} target="_blank" className="flex gap-2 items-center mb-5 underline">view product <ImNewTab /></Link>
                            <div className="bg-gray-100 rounded-md py-3 w-fit flex justify-between items-center">
                                <button onClick={decrement} className="cursor-pointer px-3 flex items-center h-full"><BiMinus /></button>
                                <span className="select-none">{ counter }</span>
                                <button onClick={increment} className="cursor-pointer px-3 flex items-center h-full"><BiPlus /></button>
                            </div>
                        </div>
                    </li>
                    <li className="py-3 relative flex items-center flex-col lg:flex-row gap-3 border-t border-black">
                        <Image
                            src={"https://cdn.dummyjson.com/products/images/womens-bags/Blue%20Women's%20Handbag/thumbnail.png"}
                            alt="Blue Women's Handbag"
                            width={200}
                            height={200}
                        />
                        <div className="w-full">
                            <h2 className="text-2xl font-semibold flex justify-between gap-2 items-center">
                                Blue Women&apos;s Handbag
                                <span className="cursor-pointer px-3 py-2 rounded hover:bg-gray-200 transition"><IoMdClose size={30} /></span>
                            </h2>
                            <p className="font-semibold mb-2">$47.371</p>
                            <p className="font-semibold mb-2">Fashionista</p>
                            <Link href={"/products/679f85d9375cda88f6fe8b80"} target="_blank" className="flex gap-2 items-center mb-5 underline">view product <ImNewTab /></Link>
                            <div className="bg-gray-100 rounded-md py-3 w-fit flex justify-between items-center">
                                <button onClick={decrement} className="cursor-pointer px-3 flex items-center h-full"><BiMinus /></button>
                                <span className="select-none">{ counter }</span>
                                <button onClick={increment} className="cursor-pointer px-3 flex items-center h-full"><BiPlus /></button>
                            </div>
                        </div>
                    </li>
                    <li className="py-3 relative flex items-center flex-col lg:flex-row gap-3 border-t border-black">
                        <Image
                            src={"https://cdn.dummyjson.com/products/images/womens-bags/Blue%20Women's%20Handbag/thumbnail.png"}
                            alt="Blue Women's Handbag"
                            width={200}
                            height={200}
                        />
                        <div className="w-full">
                            <h2 className="text-2xl font-semibold flex justify-between gap-2 items-center">
                                Blue Women&apos;s Handbag
                                <span className="cursor-pointer px-3 py-2 rounded hover:bg-gray-200 transition"><IoMdClose size={30} /></span>
                            </h2>
                            <p className="font-semibold mb-2">$47.371</p>
                            <p className="font-semibold mb-2">Fashionista</p>
                            <Link href={"/products/679f85d9375cda88f6fe8b80"} target="_blank" className="flex gap-2 items-center mb-5 underline">view product <ImNewTab /></Link>
                            <div className="bg-gray-100 rounded-md py-3 w-fit flex justify-between items-center">
                                <button onClick={decrement} className="cursor-pointer px-3 flex items-center h-full"><BiMinus /></button>
                                <span className="select-none">{ counter }</span>
                                <button onClick={increment} className="cursor-pointer px-3 flex items-center h-full"><BiPlus /></button>
                            </div>
                        </div>
                    </li>
                    <li className="py-3 relative flex items-center flex-col lg:flex-row gap-3 border-t border-black">
                        <Image
                            src={"https://cdn.dummyjson.com/products/images/womens-bags/Blue%20Women's%20Handbag/thumbnail.png"}
                            alt="Blue Women's Handbag"
                            width={200}
                            height={200}
                        />
                        <div className="w-full">
                            <h2 className="text-2xl font-semibold flex justify-between gap-2 items-center">
                                Blue Women&apos;s Handbag
                                <span className="cursor-pointer px-3 py-2 rounded hover:bg-gray-200 transition"><IoMdClose size={30} /></span>
                            </h2>
                            <p className="font-semibold mb-2">$47.371</p>
                            <p className="font-semibold mb-2">Fashionista</p>
                            <Link href={"/products/679f85d9375cda88f6fe8b80"} target="_blank" className="flex gap-2 items-center mb-5 underline">view product <ImNewTab /></Link>
                            <div className="bg-gray-100 rounded-md py-3 w-fit flex justify-between items-center">
                                <button onClick={decrement} className="cursor-pointer px-3 flex items-center h-full"><BiMinus /></button>
                                <span className="select-none">{ counter }</span>
                                <button onClick={increment} className="cursor-pointer px-3 flex items-center h-full"><BiPlus /></button>
                            </div>
                        </div>
                    </li>
                    <li className="py-3 relative flex items-center flex-col lg:flex-row gap-3 border-t border-black">
                        <Image
                            src={"https://cdn.dummyjson.com/products/images/womens-bags/Blue%20Women's%20Handbag/thumbnail.png"}
                            alt="Blue Women's Handbag"
                            width={200}
                            height={200}
                        />
                        <div className="w-full">
                            <h2 className="text-2xl font-semibold flex justify-between gap-2 items-center">
                                Blue Women&apos;s Handbag
                                <span className="cursor-pointer px-3 py-2 rounded hover:bg-gray-200 transition"><IoMdClose size={30} /></span>
                            </h2>
                            <p className="font-semibold mb-2">$47.371</p>
                            <p className="font-semibold mb-2">Fashionista</p>
                            <Link href={"/products/679f85d9375cda88f6fe8b80"} target="_blank" className="flex gap-2 items-center mb-5 underline">view product <ImNewTab /></Link>
                            <div className="bg-gray-100 rounded-md py-3 w-fit flex justify-between items-center">
                                <button onClick={decrement} className="cursor-pointer px-3 flex items-center h-full"><BiMinus /></button>
                                <span className="select-none">{ counter }</span>
                                <button onClick={increment} className="cursor-pointer px-3 flex items-center h-full"><BiPlus /></button>
                            </div>
                        </div>
                    </li>
                </ul>
                <div className="flex-1 lg:flex-[0.3] h-fit border border-black">
                    <h2 className="text-2xl font-semibold py-5 text-center border-b border-black">ORDER SUMMARY</h2>
                    <div className="flex flex-col">
                        <p className="flex justify-between py-3 px-3">SUBTOTAL <span>$5,890.00</span></p>
                        <p className="flex justify-between py-3 px-3">SHIPPING <span>$0</span></p>
                        <p className="flex justify-between py-3 px-3 border-y border-black">TOTAL <span>$5,890.00</span></p>
                    </div>
                    <Button width="w-full" className="py-5 text-black hover:text-white hover:bg-black transition">Check Out</Button>
                </div>
            </div>
        </div>
    )
}

export default CartPage