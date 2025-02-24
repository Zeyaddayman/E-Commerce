'use client';

import Link from "next/link";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { MdMenu } from "react-icons/md";
import jwt from "jsonwebtoken"
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import LogoutButton from "./ui/LogoutButton";

interface IProps {
    authToken: RequestCookie | undefined
}

const SideMenu = ({ authToken }: IProps) => {

    const [isOpened, setIsOpened] = useState(false);

    const user = jwt.decode(authToken ? authToken.value: "", { json: true });

    return (
        <>
        <button onClick={() => setIsOpened(!isOpened)} className="block md:hidden px-3 py-2 hover:bg-gray-200 transition rounded">
            <MdMenu size={30} />
        </button>
        <div className={isOpened ?  "fixed left-0 top-0 w-[270px] h-screen z-40 bg-[#ecf0f3] p-10 ease-in duration-500": "fixed left-[-100%] top-0 p-10 h-screen ease-in duration-500"}>
            <span onClick={() => setIsOpened(false)} className="float-end px-3 py-2 hover:bg-gray-200 transition cursor-pointer">
                <IoMdClose size={30} />
            </span>
            <div className="mt-16">
                {authToken ?
                    <>
                    <div className="w-20 h-20 rounded-full mb-3 bg-black flex mx-auto"></div>
                    <p className="font-bold text-center">{user?.name}</p>
                    <div className="gap-2 flex flex-col my-4 text-white">
                        <LogoutButton />
                    </div>
                    </>
                :
                <div className="text-white flex flex-col gap-3 text-center">
                    <Link href={'/user/login'} className="px-3 py-2 bg-blue-700 hover:opacity-80 transition rounded">
                        Sign in
                    </Link>
                    <Link href={'/user/register'} className="px-3 py-2 bg-gray-700 hover:opacity-80 transition rounded">
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