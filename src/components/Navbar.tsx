import Link from "next/link";
import Menu from "./Menu";

const Navbar = () => {
  return (<div className="h-12 text-red-500 p-4 flex items-center justify-between border-b-2 border-b-red-500 uppercase">
    <div className="hidden md:flex gap-4">
      <Link href="/" className="hover:text-black">Homepage</Link>
      <Link href="/menu" className="hover:text-black">Menu</Link>
      <Link href="/" className="hover:text-black">Contact</Link>
    </div>
    {/*LOGO*/}
    <Link href="/" className="">Junk & Tasty Food
    </Link>
    {/*MOBILE MENU*/}
    <div className="md:hidden">
      <Menu />
    </div>

  </div>);
};

export default Navbar;
