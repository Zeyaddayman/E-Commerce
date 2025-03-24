"use client";

import Image from "next/image";
import { useState } from "react";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";

interface IProps {
    images: string[];
}

const ImagesPreview = ({ images }: IProps) => {

    const [selected, setSelected] = useState(0);

    const increment = () => {
        if (selected < images.length - 1) {
            setSelected((prev) => prev + 1);
        }
    }

    const decrement = () => {
        if (selected > 0) {
            setSelected((prev) => prev - 1);
        }
    }

    return (
        <div className="flex flex-col gap-10 flex-1">
            <div className="relative">
                {images.length > 1 && <button onClick={decrement} className="absolute bottom-10 left-10 w-12 h-12 bg-white rounded-full flex md:hidden items-center justify-center cursor-pointer"><BiLeftArrow /></button>}

                <Image className="md:rounded-md mx-auto"
                    src={images[selected]}
                    alt="main-image"
                    width={250}
                    height={250}
                />

                {images.length > 1 && <button onClick={increment} className="absolute bottom-10 right-10 w-12 h-12 bg-white rounded-full flex md:hidden items-center justify-center cursor-pointer"><BiRightArrow /></button>}
            </div>
            {images.length > 1 && <ul className="hidden md:flex gap-4 justify-center flex-wrap">
                {images.map((imageURL, i) => (
                    <li onClick={() => setSelected(i)} key={i} className={`${selected === i ? "opacity-50" : ""} transition cursor-pointer`}>
                        <Image
                            src={imageURL}
                            alt={`product-thumbnail-${i + 1}`}
                            width={80}
                            height={80}
                        />
                    </li>
                ))}
            </ul>}
        </div>
    )
}

export default ImagesPreview