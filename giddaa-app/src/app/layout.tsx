import {Metadata} from "next";
import React from "react";




export const metadata: Metadata = {
    title: "Giddaa",
    description: "Giddaa is an Estate Management app that helps users securely find, manage, and acquire properties with ease.",
};

export default function RootLayout(props: { children: React.ReactNode }) {
    const { children } = props
    return (
        <html suppressHydrationWarning>
        <body>

            {children}
        </body>
        </html>
    )
}