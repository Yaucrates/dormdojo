"use client";

import * as React from "react";
import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { amenities, explore } from "./selection";
import LogoIcon from "@/components/icons/logo";

const MobileNavigation = () => {
    const [clothesActive, setClothesActive] = useState(false);
    const [accessoriesActive, setAccessoriesActive] = useState(false);

    return (
        <nav className="flex flex-col justify-center z-20">
            <Link href="/" className="m-8">
            <LogoIcon/>
            </Link>
            <div className="flex flex-col gap-[1px]">
                <div>
                    <div
                        className="flex justify-between p-4 items-center w-full h-20 font-semibold hover:bg-red-200 hover:cursor-pointer"
                        onClick={() => setClothesActive(!clothesActive)}
                    >
                        <p>EXPLORE</p>
                        <ChevronDown
                            className={`transition duration-200 ${
                                clothesActive && "rotate-180"
                            }`}
                        />
                    </div>
                    {clothesActive &&
                    <div className="flex flex-col">
                        {explore.map((item =>(
                            <Link href={item.href} key={item.title} className="w-full h-16 p-4 hover:bg-neutral-200 cursor-pointer">{item.title}</Link>
                        )))}
                    </div>}
                </div>
                <div>
                    <div
                        className="flex justify-between p-4 items-center w-full h-20 font-semibold hover:bg-red-200 hover:cursor-pointer"
                        onClick={() => setAccessoriesActive(!accessoriesActive)}
                    >
                        <p>AMENITIES</p>
                        <ChevronDown
                            className={`transition duration-200 ${
                                accessoriesActive && "rotate-180"
                            }`}
                        />
                    </div>
                    {accessoriesActive &&
                    <div className="flex flex-col">
                        {amenities.map((amenity =>(
                            <Link href={amenity.href} key={amenity.title} className="w-full h-16 p-4 hover:bg-neutral-200 cursor-pointer">{amenity.title}</Link>
                        )))}
                    </div>}
                </div>
                <Link
                    href="/guides"
                    className="flex p-4 items-center w-full h-20 font-semibold hover:bg-red-200"
                >
                    GUIDES
                </Link>
            </div>
        </nav>
    );
};

export default MobileNavigation;
