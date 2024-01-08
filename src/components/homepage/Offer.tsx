import Image from "next/image"
import CountDown from "../CountDown"

const productBanner: string = "https://res.cloudinary.com/dhbig9jt8/image/upload/v1704639436/qminpouguuvscyevmvwp.png"
//const productBanner: string = "https://res.cloudinary.com/dhbig9jt8/image/upload/v1704639436/wl98gp8pj1dlob6pre69.png"
const productTitle: string = "Delicious Burguer & French Fry"
const productSubtitle: string = "Progressively simplify effective e-toilers and process-centric method of empowerment. Quickly pontificate parallel."
const Offer = () => {
    return (
        <div className="bg-black h-screen flex flex-col md:flex-row">
            {/*TEXT CONTAINER*/}
            <div className="flex-1 flex flex-col justify-center items-center text-center gap-8 p-6">
                <h1 className="text-pink-100 text-5xl font-bold xl:text-6xl">{productTitle}</h1>
                <p className="text-pink-100 xl:text-xl">{productSubtitle}</p>
                <CountDown />
                <button className="bg-red-500 text-white rounded-md py-3 px-6 hover:bg-fuchsia-200 hover:text-red-500">Order now!</button>
            </div>
            {/*IMAGE CONTAINER*/}
            <div className="flex-1 w-full relative -mt-24 xl:mt-0">
                <Image src={productBanner} alt="productBanner" fill className="object-contain" />
            </div>
        </div>
    )
}

export default Offer