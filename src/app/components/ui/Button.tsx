import { ButtonHTMLAttributes, ReactNode } from "react"

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    className?: string;
}

const Button = ({ children, className, ...rest }: IProps) => {
    return (
        <button
            className={`${className} py-3 px-6`}
            {...rest}
        >
            {children}
        </button>
    )
}

export default Button