import { menu } from "@/types/products/products.type"
import Link from "next/link"


const Menupage = () => {

    return (
        <div className="p-4 lg:px-20 xl:px-40 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col md:flex-row items-center">
            {
                menu.map((category, index) => (

                    <Link key={index} href={`/menu/${category.slug}`} className="w-full h-1/3 bg-cover p-8 md:h-1/2" style={{ backgroundImage: `url(${category.img})` }}>
                        <div className={`text-${category.color} w-1/2`}>
                            <h1 className="uppercase font-bold text-3xl">{category.title}
                            </h1>
                            <p className="text-sm my-8">
                                {category.desc}
                            </p>
                            <button type="button" className={`hidden 2xl:block bg-${category.color === 'white' ? 'black' : 'black'} text-${category.color === "black" ? "white" : "white"} py-2 px-4 rounded-md`}>Explore</button>
                        </div>
                    </Link>
                ))
            }
        </div>
    )
}

export default Menupage