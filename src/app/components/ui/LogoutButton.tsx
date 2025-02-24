'use client'

import Cookies from "universal-cookie"
import { useRouter } from "next/navigation";
import { IoLogOutOutline } from "react-icons/io5"

const LogoutButton = () => {

    const router = useRouter();
    const cookies = new Cookies()

    const logout = () => {
        cookies.remove('authToken');
        router.refresh();
    }

    return (
        <button onClick={logout} className="bg-red-700 px-3 py-2 flex gap-2 items-center hover:opacity-80 transition rounded cursor-pointer">
            <IoLogOutOutline size={30} /> Logout
        </button>
    )
}

export default LogoutButton