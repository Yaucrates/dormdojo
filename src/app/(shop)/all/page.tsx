import Image from "next/image";
import { products } from "../products";

export default function ShopAllPage() {
    return (
        <main className="">
            <div className="relative w-full">
                <Image src="/all-banner.webp" alt="All Page Banner" width={730} height={269} className="w-full top-[-100rem]"/>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-8">
                {products.map((product, i) => 
                    <div className="bg-neutral-400 w-full" key={i}>
                        asdf
                    </div>
                )}
            </div>
        </main>
    );
}
