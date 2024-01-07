'use client'
import Link from "next/link";
import { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import CartIcon from "./CartIcon";

const links = [
    { id: 1, title: "Homepage", url: "/" },
    { id: 2, title: "Menu", url: "/menu" },
    { id: 3, title: "Working Hours", url: "/" },
    { id: 4, title: "Contact", url: "/" },
]

const Menu = () => {
    const [open, setOpen] = useState<boolean | null>(false)
    const user: boolean = false //temporary
    return (
        <>
            {
                !open ?
                    <IoIosMenu className="text-4xl cursor-pointer" onClick={() => setOpen(true)} />
                    : <IoMdClose className="text-4xl" onClick={() => setOpen(false)} />
            }
            {/*POSITION ABSOLUTE WE CHOOSE THE POSITION ON THE SCREEN*/}
            {
                open &&
                <div className="bg-red-500 text-white absolute left-0 top-24 py-8 w-full h-[calc(100vh-6rem)] flex flex-col gap-8 items-center text-3xl z-10">
                    {
                        links.map((link) => {
                            return <Link href={link.url} key={link.id} className="hover:text-black" onClick={() => { setOpen(false) }}>{link.title}</Link>;
                        })
                    }
                    {
                        !user ?
                            <Link href="/login" className="hover:text-black">Login</Link>
                            : <Link href="/orders" className="hover:text-black" onClick={() => { setOpen(false) }}>Orders</Link>
                    }

                    <CartIcon />

                </div>
            }
        </>
    )
}

export default Menu