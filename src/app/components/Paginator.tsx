"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Button from "./ui/Button";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";

interface IProps {
    page: number;
    paginationPages: number
}

const Paginator = ({ page, paginationPages }: IProps) => {

    const searchParams = useSearchParams();
    const pathname = usePathname();
    const params = new URLSearchParams(searchParams.toString());
    const { replace } = useRouter();

    const prevPage = () => {
        if (page === 2) {
            params.delete("page");
            replace(`${pathname}?${params.toString()}`);
            return;
        }
        if (page !== 1) {
            params.set("page", String(page - 1));
            replace(`${pathname}?${params.toString()}`);
        }
    }

    const nextPage = () => {
        if (page !== paginationPages) {
            params.set("page", String(page + 1))
            replace(`${pathname}?${params.toString()}`);
        }
    }

    const changePage = (value: number) => {

        if (value === page) return;

        if (value === 1) {
            params.delete("page");
            replace(`${pathname}?${params.toString()}`);
        } else {
            params.set("page", String(value));
            replace(`${pathname}?${params.toString()}`);
        }
    }

    return (
        <div className="flex justify-between py-10 items-center gap-5">
            <Button
                onClick={prevPage}
                className="text-white bg-teal-700 transition hover:opacity-80 flex items-center gap-2 w-fit"
            >
                <BiLeftArrow /> Prev
            </Button>

            <div className="hidden sm:flex gap-2 flex-wrap">
                {Array.from({ length: paginationPages }, (_, i) => i + 1).map((x) => (
                    <span
                        key={x}
                        onClick={() => changePage(x)}
                        className={`${x === page ? "bg-gray-600 text-white" : "cursor-pointer"} py-2 px-4 border border-gray-300 hover:bg-gray-600 hover:text-white transition rounded-md`}
                    >
                        {x}
                    </span>
                ))}
            </div>

            <Button
                onClick={nextPage}
                className="text-white bg-teal-700 transition hover:opacity-80 flex items-center gap-2 w-fit"
            >
                Next <BiRightArrow />
            </Button>
        </div>
    )
}

export default Paginator