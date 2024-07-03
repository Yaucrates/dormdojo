"use client";
import Link from "next/link";

import { Menu, ShoppingCart } from "lucide-react";
import Navigation from "./Navigation";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import MobileNavigation from "./MobileNavigation";
import DormDojoLogo from "../DormDojoLogo/DormDojoLogo";

const Header = () => {
    return (
        <header className="flex flex-row justify-between items-center">
            <div className="flex items-center gap-4">
                <Link href="/">
                    <DormDojoLogo/>
                </Link>
                <div className="hidden sm:block">
                    <Navigation />
                </div>
            </div>
            <div className="flex gap-4">
                <Link href="/">
                    <ShoppingCart className="mr-5" />
                </Link>
                <div className="block sm:hidden">
                    <Sheet>
                        <SheetTrigger>
                            <Menu className="mr-5" />
                        </SheetTrigger>
                        <SheetContent className="p-0 m-0 border-0">
                            <MobileNavigation />
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
};

export default Header;
