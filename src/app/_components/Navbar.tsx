import Link from "next/link"
import { IoCartOutline } from "react-icons/io5"
import SideMenu from "./SideMenu"
import { cookies } from "next/headers"
import jwt from "jsonwebtoken"
import CartCount from "./CartCount"
import { BiUser } from "react-icons/bi"
import AuthButtons from "./AuthButtons"

const Navbar = () => {
    const cookieStore = cookies();

    const authToken = cookieStore.get('authToken');

    const user = jwt.decode(authToken ? authToken.value : "", { json: true });

    return (
        <nav className="py-6 shadow-md">
            <div className="container px-6 md:px-16 mx-auto flex justify-between items-center">
                <Link href={'/'} className="text-3xl font-bold">LOGO</Link>
                <Link href={'/cart'} className="px-6 py-3 hidden md:flex gap-2 items-center rounded hover:bg-gray-200 transition">
                    <IoCartOutline size={30} /> cart - <CartCount />
                </Link>
                {authToken ?
                    <Link href={'/profile'} className="px-6 py-3 hidden md:flex justify-between items-center gap-2 rounded hover:bg-gray-200 transition">
                        <BiUser size={30} />
                        {user?.name}
                    </Link>
                :
                    <AuthButtons />
                }
                <SideMenu authToken={authToken} />
            </div>
        </nav>
    )
}

export default Navbar