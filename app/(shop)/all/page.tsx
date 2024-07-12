import Image from "next/image";
import { products } from "../products";
import Link from "next/link";

export default function ShopAllPage() {
    return (
        <main className="">
            <div className="relative w-full">
                <Image src="/all-banner.webp" alt="All Page Banner" width={730} height={269} className="w-full top-[-100rem]"/>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-8">
                {products.map((product, i) => 
                    <Link href={`/products/${i}`} className="flex flex-col items-center gap-2 p-4 w-full rounded-lg hover:bg-blue-100 duration-300 transition-all" key={i}>
                        <Image src={product.image_url} alt="bean bag chair" width={2250} height={1500} className="rounded-lg"/>
                        <h2 className="text-2xl font-light">{product.name}</h2>
                        <p className="font-light">{`$${product.price.toFixed(2)}`}</p>
                    </Link>
                )}
            </div>
        </main>
    );
}
