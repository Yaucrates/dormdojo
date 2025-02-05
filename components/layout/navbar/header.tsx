import Link from "next/link";

import { Menu, ShoppingCart } from "lucide-react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import MobileNavigation from "./mobile-navigation";
import LogoIcon from "@/components/icons/logo";
import Navigation from "./navigation";
import { getCollections } from "@/lib/shopify";
import { getAmenities, getExplore, getPinned } from "@/lib/special-collections";
import { Suspense } from "react";
import OpenCart from "@/components/cart/open-cart";
import Cart from "@/components/cart";

const Header = async () => {
    const collections = await getCollections();
    const explore = await getExplore(collections);
    const amenities = await getAmenities(collections);
    const pinned = await getPinned(collections);

    return (
        <header className="flex flex-row justify-between items-center">
            <div className="flex items-center gap-4">
                <Link href="/" className="m-8">
                    <LogoIcon/>
                </Link>
                <div className="hidden sm:block">
                    <Navigation explore={explore} amenities={amenities} pinned={pinned}/>
                </div>
            </div>
            <div className="flex items-center gap-4">
                <div className=" md:mr-5">
                    <Suspense fallback={<OpenCart />}>
                        <Cart />
                    </Suspense>
                </div>
                <div className="block sm:hidden mt-1">
                    <Sheet>
                        <SheetTrigger>
                            <Menu className="mr-5" />
                        </SheetTrigger>
                        <SheetContent className="p-0 m-0 border-0">
                            <MobileNavigation explore={explore} amenities={amenities} />
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
};

export default Header;
