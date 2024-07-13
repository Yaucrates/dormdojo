import Image from "next/image";
import Link from "next/link";

export const metadata = {
    description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
    openGraph: {
      type: 'website'
    }
  };

export default function Home() {
    return (
        <div className="flex flex-col min-[1000px]:flex-row justify-between items-center gap-1 min-[1000px]:gap-0">
            <div className="relative w-full min-[1000px]:w-[49.8%]">
                <Image
                    src="/left.webp"
                    alt="left room"
                    className="w-full"
                    width={643}
                    height={858}
                    priority
                />
                <div className="absolute bottom-16 md:bottom-32 left-0 right-0 flex flex-col items-center gap-4">
                    <h1 className="text-white text-4xl font-light">
                        ESSENTIALS
                    </h1>
                    <Link
                        href="/essentials"
                        className="bg-white w-56 h-12
                                            text-black text-xl font-normal
                                            flex justify-center items-center text-center"
                    >
                        Explore
                    </Link>
                </div>
            </div>
            <div className="relative w-full min-[1000px]:w-[49.8%]">
                <Image
                    src="/right.webp"
                    alt="right room"
                    className="w-full"
                    width={563}
                    height={749}
                    priority
                />
                <div className="absolute bottom-16 md:bottom-36 left-0 right-0 flex flex-col items-center gap-4">
                    <h1 className="text-white text-4xl font-light">
                        AMENITIES
                    </h1>
                    <Link
                        href="/"
                        className="bg-white w-56 h-12
                                            text-black text-xl font-normal
                                            flex justify-center items-center text-center"
                    >
                        Explore
                    </Link>
                </div>
            </div>
        </div>
    );
}
