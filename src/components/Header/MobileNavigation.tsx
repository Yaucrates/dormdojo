"use client";

import * as React from "react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

const MobileNavigation = () => {
    const [clothesActive, setClothesActive] = useState(false);
    const [accessoriesActive, setAccessoriesActive] = useState(false);

    return (
        <nav className="flex flex-col justify-center z-20">
            <Image
                src="/sora_logo.webp"
                alt="Sora Logo"
                className="mx-6 mt-6 mb-4"
                width={1755 * 0.07}
                height={586 * 0.07}
            />
            <div className="flex flex-col gap-[1px]">
                <div>
                    <div
                        className="flex justify-between p-4 items-center w-full h-20 font-semibold hover:bg-red-200 hover:cursor-pointer"
                        onClick={() => setClothesActive(!clothesActive)}
                    >
                        <p>CLOTHES</p>
                        <ChevronDown
                            className={`transition duration-200 ${
                                clothesActive && "rotate-180"
                            }`}
                        />
                    </div>
                    {clothesActive &&
                    <div className="flex flex-col">
                        <Link href="/" className="w-full h-16 p-4 hover:bg-neutral-200 cursor-pointer">ALL</Link>
                        <Link href="/" className="w-full h-16 p-4 hover:bg-neutral-200 cursor-pointer">SHIRTS</Link>
                        <Link href="/" className="w-full h-16 p-4 hover:bg-neutral-200 cursor-pointer">SWEATERS</Link>
                        <Link href="/" className="w-full h-16 p-4 hover:bg-neutral-200 cursor-pointer">BOTTOMS</Link>
                    </div>}
                </div>
                <div>
                    <div
                        className="flex justify-between p-4 items-center w-full h-20 font-semibold hover:bg-red-200 hover:cursor-pointer"
                        onClick={() => setAccessoriesActive(!accessoriesActive)}
                    >
                        <p>ACCESSORIES</p>
                        <ChevronDown
                            className={`transition duration-200 ${
                                accessoriesActive && "rotate-180"
                            }`}
                        />
                    </div>
                    {accessoriesActive &&
                    <div className="flex flex-col">
                        <Link href="/" className="w-full h-16 p-4 hover:bg-neutral-200 cursor-pointer">ALL ACCESSORIES</Link>
                        <Link href="/" className="w-full h-16 p-4 hover:bg-neutral-200 cursor-pointer">WALLETS</Link>
                        <Link href="/" className="w-full h-16 p-4 hover:bg-neutral-200 cursor-pointer">NECKLACES</Link>
                        <Link href="/" className="w-full h-16 p-4 hover:bg-neutral-200 cursor-pointer">SHOES</Link>
                        <Link href="/" className="w-full h-16 p-4 hover:bg-neutral-200 cursor-pointer">RINGS</Link>
                        <Link href="/" className="w-full h-16 p-4 hover:bg-neutral-200 cursor-pointer">MISC</Link>
                    </div>}
                </div>
                <Link
                    href="/"
                    className="flex p-4 items-center w-full h-20 font-semibold hover:bg-red-200"
                >
                    FAQ
                </Link>
            </div>
        </nav>
    );
};

export default MobileNavigation;
