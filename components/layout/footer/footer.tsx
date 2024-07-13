import LogoIcon from "@/components/icons/logo";
import Instagram from "@/components/icons/instagram";
import Tiktok from "@/components/icons/tiktok";
import Discord from "@/components/icons/discord";
import { getMenu } from "@/lib/shopify";
import FooterMenu from "./footer-menu";

const Footer = async () => {
    const currentYear = new Date().getFullYear();
    const copyrightDate = 2024 + (currentYear > 2024 ? `-${currentYear}` : '');
    const menuList = await getMenu('next-js-frontend-footer-menu');
    const menu = [{title: 'Home', path: '/'}, ...menuList]

    return (
        <footer className="h-96">
            <div className="flex flex-col gap-20 sm:flex-row items-center px-10 sm:px-20 md:px-40 py-10 sm:py-0 min-h-60 mt-4 border-y-2">
                <LogoIcon />
                <FooterMenu menu={menu} />
            </div>
            <div className="flex flex-col sm:flex-row justify-around sm:justify-between px-10 sm:px-20 md:px-40 items-center h-32 text-center">
                <p className="text-neutral-500 text-sm">
                    Copyright © {copyrightDate} DormDojo. Powered by DormDojo.
                </p>
                {/*<div className="flex gap-5">
                    <Instagram />
                    <Tiktok />
                    <Discord />
                </div>*/}
            </div>
        </footer>
    );
};

export default Footer;
