"use client";

import * as React from "react";
import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import LogoIcon from "@/components/icons/logo";
import { Collection } from "@/lib/shopify/types";

const MobileNavigation = ({ explore, amenities }: { explore: Collection[], amenities: Collection[] }) => {
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
                            <Link href={item.path} key={item.handle} className="w-full h-16 p-4 hover:bg-neutral-200 cursor-pointer">{item.title}</Link>
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
                            <Link href={amenity.path} key={amenity.handle} className="w-full h-16 p-4 hover:bg-neutral-200 cursor-pointer">{amenity.title.toUpperCase()}</Link>
                        )))}
                    </div>}
                </div>
                <Link
                    href="/dorm-living-crash-course"
                    className="flex p-4 items-center w-full h-20 font-semibold hover:bg-red-200"
                >
                    Dorm Living Crash Course
                </Link>
            </div>
        </nav>
    );
};

export default MobileNavigation;
