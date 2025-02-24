import Link from "next/link"
import { IoCartOutline } from "react-icons/io5"
import SideMenu from "./SideMenu"
import { cookies } from "next/headers"
import jwt from "jsonwebtoken"
import LogoutButton from "./ui/LogoutButton"
import CartAmount from "./CartAmount"

const Navbar = () => {
    const cookieStore = cookies();

    const authToken = cookieStore.get('authToken');

    const user = jwt.decode(authToken ? authToken.value : "", { json: true });

    return (
        <nav className="py-6 shadow-md">
            <div className="container px-6 mx-auto md:px-16 flex justify-between items-center">
                <Link href={'/'} className="logo text-3xl font-bold">LOGO</Link>
                <Link href={'/cart'} className="px-3 py-2 hover:bg-gray-200 transition rounded hidden md:flex gap-2 items-center">
                    <IoCartOutline size={30} /> cart - <CartAmount />
                </Link>
                {authToken ?
                    <div className="group min-w-44 relative py-2 hover:bg-gray-200 transition hidden md:flex justify-center gap-2 items-center rounded-t cursor-pointer">
                        <div className="bg-black w-12 h-12 rounded-full"></div>
                        <span>{user?.name}</span>
                        <div className="absolute hidden group-hover:flex gap-2 flex-col left-0 top-16 w-full px-3 py-5 rounded-b text-white bg-gray-200 transition">
                            <LogoutButton />
                        </div>
                    </div>
                :
                    <>
                    <div className="text-white hidden md:flex gap-3">
                        <Link href={'/user/login'} className="px-3 py-2 bg-blue-700 hover:opacity-80 transition rounded">
                            Sign in
                        </Link>
                        <Link href={'/user/register'} className="px-3 py-2 bg-gray-700 hover:opacity-80 transition rounded">
                            Register
                        </Link>
                    </div>
                    </>
                }
                <SideMenu authToken={authToken} />
            </div>
        </nav>
    )
}

export default Navbar