import Navbar from "../components/Navbar";

export default function ProductsLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
        <Navbar />
        {children}
        </>
    );
}