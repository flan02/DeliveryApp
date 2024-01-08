import Image from "next/image"
import Link from "next/link"

const cartIcon: string = "https://res.cloudinary.com/dhbig9jt8/image/upload/v1704639424/luxxpyhvdtwwo5t5hhth.png"



const CartIcon = () => {
    return (
        <Link href="/cart" className="flex items-center gap-2" >
            <div className="relative w-8 h-8 md:w-5 md:h-5">
                <Image src={cartIcon} alt="cart" fill sizes="10" /> {/*Fills its parent element*/}
            </div>
            <span className="text-md hover:text-black lg:text-md ">Cart(3)</span>
        </Link>
    )
}

export default CartIcon