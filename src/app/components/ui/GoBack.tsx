"use client"

import { BiLeftArrow } from "react-icons/bi"
import Button from "./Button"
import { useRouter } from "next/navigation"

const GoBack = () => {

    const { back } = useRouter()

    return (
        <Button onClick={back} className="flex gap-2 items-center border border-gray-400">
            <BiLeftArrow /> back
        </Button>
    )
}

export default GoBack