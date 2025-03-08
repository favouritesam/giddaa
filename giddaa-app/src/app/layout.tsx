import {Metadata} from "next";
import React from "react";
import {Box} from "@chakra-ui/react";


export const metadata: Metadata = {
    title: "Giddaa",
    description: "Giddaa is an Estate Management app that helps users securely find, manage, and acquire properties with ease.",
};


export default async function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
    return (

        <html lang="en">
        <body suppressHydrationWarning={true}>
        <Box>
            {children}
        </Box>
        </body>
        </html>

    );
}

