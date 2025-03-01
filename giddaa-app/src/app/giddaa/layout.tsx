import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "../globals.css";
import SideNav from "@/components/containers/dashboardlayout/SideNav";


const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Giddaa",
    description: "Giddaa is an Estate Management app that helps users securely find, manage, and acquire properties with ease.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (

        <div className={dmSans.className} suppressHydrationWarning={true}>
            <div className={'tw-divide-x tw-divide-[#D0D5DD]'}>
                {/*<SideNav/>*/}
                <div>
                    {children}
                </div>
            </div>
        </div>

    );
}
