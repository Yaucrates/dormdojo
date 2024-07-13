import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/navbar/header";
import Footer from "@/components/layout/footer";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Dorm Dojo",
    description:
        "Dorm Dojo Official Website - Explore our custom collections of high quality decoration.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={montserrat.className}>
            <body className={`flex flex-col min-h-screen`}>
                <Header />
                <div className="grow">
                    {children}
                </div>
                <Footer />
            </body>
        </html>
    );
}
