import Image from "next/image"
import Link from "next/link"

const cartIcon: string = "https://res.cloudinary.com/dhbig9jt8/image/upload/v1704639424/luxxpyhvdtwwo5t5hhth.png"

type CartIconProps = {
    setOpen: (open: boolean) => void
}

const CartIcon = ({ setOpen }: CartIconProps) => {
    return (
        <Link href="/cart" className="flex items-center gap-4" onClick={() => { setOpen(false) }}>
            <div className="relative w-8 h-8">
                <Image src={cartIcon} alt="cart" fill sizes="30" /> {/*Fills its parent element*/}
            </div>
            <span className="hover:text-black">Cart (3)</span>
        </Link>
    )
}

export default CartIcon