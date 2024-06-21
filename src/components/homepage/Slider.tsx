'use client'
import Image from "next/image"
import { useEffect, useState } from "react"

type DataType = {
    id: number,
    title: string,
    image: string,
}

const data: DataType[] = [
    {
        id: 1,
        title: "always fresh & always crispy & always hot",
        image: "https://res.cloudinary.com/dhbig9jt8/image/upload/v1704639436/wqswyrueapivputmpusv.png"
    },
    {
        id: 2,
        title: "we deliver your order wherever you are in NY",
        image: "https://res.cloudinary.com/dhbig9jt8/image/upload/v1704639437/en3qegp0ggelecymp94z.png"
    },

    {
        id: 3,
        title: "the best pizza to share with your family",
        image: "https://res.cloudinary.com/dhbig9jt8/image/upload/v1704639436/gvtk5pqvqo2stbht7l3c.jpg"
    }

]

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState<number>(0)

    //* WE CAN USE THIS TO CHANGE THE SLIDE EVERY 5 SECONDS: useSlide

    useEffect(() => {
        const interval = setInterval(() => setCurrentSlide((prev) => (prev == data.length - 1) ? 0 : prev + 1), 3000);
        return () => clearInterval(interval)
    }, [])

    return (
        <div className="flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row bg-fuchsia-100">
            {/*TEXT CONTAINER*/}
            <div className="flex-1 flex items-center justify-center flex-col gap-8 text-red-500 font-bold ">
                <h1 className="text-4xl md:p-10 md:text-6xl xl:text-7xl text-center p-4 uppercase">
                    {data[currentSlide].title}
                </h1>
                <button className="bg-red-500 hover:bg-fuchsia-200 hover:text-red-500 text-white py-4 px-8">Order now!</button>
            </div>
            {/*IMAGE CONTAINER*/}
            <div className="w-full relative flex-1">
                <Image src={data[currentSlide].image} alt="slide-image" fill className="object-cover" sizes="10"></Image>
            </div>
        </div>
    )
}

export default Slider