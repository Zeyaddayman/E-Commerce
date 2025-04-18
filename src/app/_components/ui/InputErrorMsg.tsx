interface IProps {
    msg?: string
}

const InputErrorMessage = ({ msg }: IProps) => {
    if (msg) return (
        <span className="block text-red-700 font-semibold text-sm">{msg}</span>
    );
};

export default InputErrorMessage;