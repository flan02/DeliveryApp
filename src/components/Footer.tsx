import Link from "next/link"


const Footer = () => {
    return (
        <div className="h-12 md:h-12  p-4 lg:p-20 xl:p-20 text-red-500 flex items-center justify-between uppercase">
            <Link href="/" className="font-bold text-xl">PIZZA HUNT</Link>
            <p className="text-sm"> ALL RIGHTS RESERVED</p>
        </div>
    )
}

export default Footer