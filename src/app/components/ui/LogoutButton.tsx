'use client'

import Cookies from "universal-cookie"
import { useRouter } from "next/navigation";
import { IoLogOutOutline } from "react-icons/io5"
import Button from "./Button";

const LogoutButton = ({ width = "w-fit" }: { width?: "w-fit" | "w-full" }) => {

    const router = useRouter();
    const cookies = new Cookies()

    const logout = () => {
        cookies.remove('authToken');
        router.refresh();
    }

    return (
        <Button onClick={logout} className={`border border-red-600 hover:bg-red-600 hover:text-white ${width}`}>
            <IoLogOutOutline size={30} /> Logout
        </Button>
    )
}

export default LogoutButton