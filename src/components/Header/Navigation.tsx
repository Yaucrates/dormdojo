import * as React from "react";
import { cn } from "@/lib/utils";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

// rings, necklaces, watches, wallets, shoes
const clothes: { title: string; href: string; description: string }[] = [
    {
        title: "ALL",
        href: "",
        description: "Checkout all SORA clothing.",
    },
    {
        title: "SHIRTS",
        href: "",
        description: "Checkout SORA shirts.",
    },
    {
        title: "SWEATERS",
        href: "",
        description: "Checkout SORA sweaters.",
    },
    {
        title: "BOTTOMS",
        href: "",
        description: "Checkout SORA bottoms.",
    },
];

const accesssories: { title: string; href: string; description: string }[] = [
    {
        title: "ALL ACCESSORIES",
        href: "",
        description: "Get SORA accessories.",
    },
    {
        title: "SHOES",
        href: "",
        description: "Get SORA shoes.",
    },
    {
        title: "WALLETS",
        href: "",
        description: "Get SORA wallets.",
    },
    {
        title: "RINGS",
        href: "",
        description: "Get SORA rings.",
    },
    {
        title: "NECKLACES",
        href: "",
        description: "Get SORA necklaces.",
    },
    {
        title: "MISC",
        href: "",
        description: "Get SORA items.",
    },
];

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">
                        {title}
                    </div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    );
});
ListItem.displayName = "ListItem";

const Navigation = () => {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>CLOTHES</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                            <li className="row-span-4 col-span-2">
                                <NavigationMenuLink asChild>
                                    <a
                                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                        href="/"
                                    >
                                        <div className="mb-2 mt-4 text-lg font-medium">
                                            Latest Drops
                                        </div>
                                        <p className="text-sm leading-tight text-muted-foreground">
                                            Checkout our newest items.
                                        </p>
                                    </a>
                                </NavigationMenuLink>
                            </li>
                            {clothes.map((clothing) => (
                                <ListItem
                                    key={clothing.title}
                                    href={clothing.href}
                                    title={clothing.title}
                                >
                                    {clothing.description}
                                </ListItem>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>ACCESSORIES</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                            {accesssories.map((accessory) => (
                                <ListItem
                                    key={accessory.title}
                                    title={accessory.title}
                                    href={accessory.href}
                                >
                                    {accessory.description}
                                </ListItem>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="/" legacyBehavior passHref>
                        <NavigationMenuLink
                            className={navigationMenuTriggerStyle()}
                        >
                            Guides
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    );
};

export default Navigation;
