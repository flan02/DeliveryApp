import Link from "next/link"


const Footer = () => {
    return (
        <>
            <div className="text-center h-max pb-4 md:h-12 bg-red-100 p-4 lg:px-20 xl:px-40 text-red-500  uppercase">
                <Link href="/" className="font-bold text-2xl">PIZZA HUNT</Link>
            </div>
            <p className="text-sm md:py-4 bg-red-100 text-center text-red-500">Created by <span className="underline">Dan Chanivet</span></p>

            <p className="py-4 md:pb-10 text-sm bg-red-100 text-center text-red-500"> ALL RIGHTS RESERVED</p>
        </>
    )
}

export default Footer