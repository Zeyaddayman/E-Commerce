'use client';

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "universal-cookie"
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "@/app/_validation";
import Input from "@/app/_components/ui/Input";
import InputErrorMessage from "@/app/_components/ui/InputErrorMsg";

export default function Login() {

    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(loginSchema)
    });

    const [loading, setLoading] = useState(false);

    const loginUser = async (data: {email: string, password: string}) => {
        setLoading(true);

        const res = await fetch('/api/auth/login', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        if (res.status === 200) {
            const cookies = new Cookies()
            const token = await res.json();

            cookies.set("authToken", token, { path: "/" });
            
            toast.success("Logged in successfully");
            setTimeout(() => {
                router.push("/");
                router.refresh();
            }, 1500);
        } else {
            const text = await res.text();
            toast.error(text);
        }
        setLoading(false);
    }

    const renderForm = () => (
        <form className="space-y-6" onSubmit={handleSubmit(loginUser)}>

            <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                    Email address
                </label>
                <div className="mt-2">
                    <Input
                        id="email"
                        type="email"
                        autoComplete="email"
                        required
                        {...register('email')}
                    />
                    {errors['email'] && <InputErrorMessage msg={errors['email'].message} />}
                </div>
            </div>

            <div>
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                </label>
                <div className="mt-2">
                    <Input
                        id="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        {...register('password')}
                    />
                    {errors['password'] && <InputErrorMessage msg={errors['password'].message} />}
                </div>
            </div>

            <div>
                <button
                    type="submit"
                    className={`${loading ? "bg-gray-500 pointer-events-none" : "bg-indigo-600 hover:bg-indigo-500 focus-visible:outline-indigo-600"} flex w-full justify-center rounded-md px-3 py-3 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 select-none`}
                    disabled={loading}
                >
                    {loading ? "Loading..." : "Login"}
                </button>
            </div>
        </form>
    )

    return (
    <>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Login
            </h2>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                {renderForm()}

                <p className="mt-10 text-center text-sm text-gray-500">
                    Dont have an accout?{' '}
                    <Link href="/user/register" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                        Register
                    </Link>
                </p>
            </div>
        </div>
    </>
    )
}
