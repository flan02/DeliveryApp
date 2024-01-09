import Image from "next/image"
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const Loginpage = () => {
    return (
        <div className="p-4 h[calc(100vh-6rem)] md:h[calc(100vh-9rem)] flex items-center justify-center">
            {/* BOX*/}
            <div className="h-full shadow-2xl rounded-md flex flex-col md:flex-row md:h-[70%] md:w-full lg:w-[60%] 2xl:w-1/2">
                {/* IMAGE CONTAINER*/}
                <div className="relative w-full h-[33vh] md:h-96 md:w-1/2">
                    <Image src="https://res.cloudinary.com/dhbig9jt8/image/upload/v1704639435/iim1lulgzeepqdyxxbl0.webp" alt="login" fill sizes="1" className="object-cover"></Image>
                </div>
                {/* FORM CONTAINER*/}
                <div className="p-10 flex flex-col gap-8 md:w-1/2">
                    <h1 className="font-bold text-2xl xl:text-4xl">Welcome</h1>
                    <p>Log into your account or create a new one using social buttons</p>
                    <button className="w-3/4 hover:bg-slate-300 hover:text-blue-50 flex gap-4 p-4 ring-1 ring-orange-100 border-2">
                        <FcGoogle className="text-2xl" />
                        <span className="text-sm">Sign in with Google </span>
                    </button>
                    <button className="w-3/4 hover:bg-slate-300 hover:text-blue-50 flex gap-4 p-4 ring-1 ring-blue-100 border-2">
                        <FaFacebook className="text-2xl text-blue-600" />
                        <span className="text-sm">Sign in with Facebook </span>
                    </button>
                    <p className="text-sm">Have a problem? &nbsp;
                        <Link href="/" className="underline">Contact us</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Loginpage