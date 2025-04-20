"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const AuthButtons = () => {
    const pathname = usePathname()

    return (
        <div className="text-white hidden md:flex gap-3">
            <Link href={`/user/login?redirect=${pathname}`} className="px-6 py-3 bg-blue-700 hover:opacity-90 transition rounded">
                Login
            </Link>
            <Link href={`/user/register?redirect=${pathname}`} className="px-6 py-3 bg-gray-700 hover:opacity-90 transition rounded">
                Register
            </Link>
        </div>
    )
}

export default AuthButtons