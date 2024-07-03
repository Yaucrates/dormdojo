import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Image from "next/image";

import Link from "next/link";

export default function Home() {
    return (
        <main className="">
            <Header/>
            <div className="flex flex-col gap-2">
                <div className="flex flex-col min-[1000px]:flex-row justify-between items-center gap-1 min-[1000px]:gap-0">
                    <div className="relative w-full min-[1000px]:w-[49.8%]">
                        <Image src="/left.webp" alt="left room" className="w-full" width={643} height={858}/>
                        <div className="absolute bottom-16 md:bottom-32 left-0 right-0 flex flex-col items-center gap-4">
                            <h1 className="text-white text-4xl font-light">CLOTHES</h1>
                            <Link href="/" className="bg-white w-56 h-12
                                            text-black text-xl font-normal
                                            flex justify-center items-center text-center">
                                Explore
                            </Link>
                        </div>
                    </div>
                    <div className="relative w-full min-[1000px]:w-[49.8%]">
                        <Image src="/right.webp" alt="right room" className="w-full" width={563} height={749}/>
                        <div className="absolute bottom-16 md:bottom-36 left-0 right-0 flex flex-col items-center gap-4">
                            <h1 className="text-white text-4xl font-light">ACCESSORIES</h1>
                            <Link href="/" className="bg-white w-56 h-12
                                            text-black text-xl font-normal
                                            flex justify-center items-center text-center">
                                Explore
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </main>
    );
}
