import Link from "next/link";
import Menu from "./Menu";
import CartIcon from "./CartIcon";

import { FaPhone } from "react-icons/fa6";

const Navbar = () => {
  const user: boolean = false;
  return (<div className="h-12 text-red-500 p-4 flex items-center justify-between border-b-2 border-b-red-500 uppercase md:h-24 lg:text-lg lg:px-20 xl:px-40">
    {/*LEFT LINKS*/}
    <div className="hidden md:flex gap-4 flex-1 md:text-center">
      <Link href="/" className="hover:text-black">Homepage</Link>
      <Link href="/menu" className="hover:text-black">Menu</Link>
      <Link href="/" className="hover:text-black">Contact</Link>
    </div>
    {/*LOGO*/}
    <Link href="/" className="font-bold flex-1 md:text-xl text-center 2xl:text-3xl">Pizza Hunt
    </Link>
    {/*MOBILE MENU*/}
    <div className="md:hidden">
      <Menu />
    </div>
    {/*RIGHT LINKS*/}
    <div className="hidden md:flex gap-4 items-center justify-end flex-1">
      <div className="md:absolute top-3 r-2 lg:static flex items-center gap-2 cursor-pointer bg-orange-300 px-1 rounded-md">
        <FaPhone />
        <span>+5491124821510</span>
      </div>
      {
        !user ?
          <Link href="/login" className="hover:text-black">Login</Link>
          : <Link href="/orders" className="hover:text-black">Orders</Link>
      }
      <CartIcon />
    </div>

  </div>);
};

export default Navbar;
