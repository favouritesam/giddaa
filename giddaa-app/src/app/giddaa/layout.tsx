import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "../globals.css";
import SideNav from "@/components/containers/dashboardlayout/SideNav";
import { Box } from "@chakra-ui/react";
import React from "react";

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
        <Box className={dmSans.className} suppressHydrationWarning={true}>
            <Box>
                {/*<SideNav />*/}
                <Box>
                    {children}
                </Box>
            </Box>
        </Box>
    );
}

