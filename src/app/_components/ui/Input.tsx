import { InputHTMLAttributes, forwardRef } from "react";

const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(({ ...rest }, ref) => {
    return (
        <input
            ref={ref}
            className="mb-1 border-[1px] border-gray-300 shadow-lg focus:border-indigo-600 focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-lg px-3 py-3 text-md w-full bg-transparent"
            {...rest}
        />
    );
});

Input.displayName = "Input";

export default Input;
