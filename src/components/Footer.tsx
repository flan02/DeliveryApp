import Link from "next/link"


const Footer = () => {
    return (
        <div className="h-16 md:h-12 bg-red-100 p-4 lg:px-20 xl:px-40 text-red-500 flex items-center justify-between uppercase">
            <Link href="/" className="font-bold text-xl">PIZZA HUNT</Link>
            <p className="text-sm"> ALL RIGHTS RESERVED</p>
        </div>
    )
}

export default Footer