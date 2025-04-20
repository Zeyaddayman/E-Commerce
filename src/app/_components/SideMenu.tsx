'use client';

import Link from "next/link";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { MdMenu } from "react-icons/md";
import jwt from "jsonwebtoken"
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { BiUser } from "react-icons/bi";
import { IoCartOutline } from "react-icons/io5";
import CartCount from "./CartCount";
import { usePathname } from "next/navigation";

interface IProps {
    authToken: RequestCookie | undefined
}

const SideMenu = ({ authToken }: IProps) => {

    const [isOpened, setIsOpened] = useState(false);

    const user = jwt.decode(authToken ? authToken.value : "", { json: true });
    const pathname = usePathname()

    return (
        <>
        <button onClick={() => setIsOpened(!isOpened)} className="block md:hidden px-3 py-2 hover:bg-gray-200 transition rounded">
            <MdMenu size={30} />
        </button>
        
        <div className={isOpened ?  "fixed left-0 top-0 w-[270px] h-screen z-40 bg-white shadow-md p-10 ease-in duration-500": "fixed left-[-100%] top-0 p-10 h-screen ease-in duration-500"}>
            <span onClick={() => setIsOpened(false)} className="float-end px-3 py-2 hover:bg-gray-200 transition cursor-pointer rounded">
                <IoMdClose size={30} />
            </span>
            <div className="mt-16">
                <Link href={'/cart'} className="px-6 py-3 mb-3 flex marker:gap-2 justify-between items-center rounded hover:bg-gray-200 transition">
                    <IoCartOutline size={30} /> cart - <CartCount />
                </Link>
                {authToken ?
                    <Link href={'/profile'} className="px-6 py-3 flex mb-3 justify-between items-center gap-2 rounded hover:bg-gray-200 transition">
                        <BiUser size={30} />
                        {user?.name}
                    </Link>
                :
                <div className="text-white flex flex-col gap-3 text-center">
                    <Link href={`/user/login?redirect=${pathname}`} className="px-6 py-3 bg-blue-700 hover:opacity-80 transition rounded">
                        Login
                    </Link>
                    <Link href={`/user/register?redirect=${pathname}`} className="px-6 py-3 bg-gray-700 hover:opacity-80 transition rounded">
                        Register
                    </Link>
                </div>
                }
            </div>
        </div>
        </>
    )
}

export default SideMenu