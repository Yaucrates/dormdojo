import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

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
        <html lang="en">
            <body className={`flex flex-col min-h-screen ${montserrat.className}`}>
                <Header/>
                <main className="grow">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
