import { Provider } from "@/components/ui/provider"
import {DM_Sans, IBM_Plex_Sans, Nunito_Sans} from "next/dist/compiled/@next/font/dist/google";
import {Metadata} from "next";
import React from "react";

const dmSans = DM_Sans({
    subsets: ["latin"],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    variable: '--DM_Sans',
    display: "swap",
    adjustFontFallback: false
});

const nunito_sans = Nunito_Sans({
    subsets: ["latin"],
    weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
    variable: '--Nunito_Sans',
    display: "swap",
    adjustFontFallback: false
})


const ibm_plex = IBM_Plex_Sans({
    subsets: ["latin"],
    weight: ['100', '200', '400', '300', '500', '600', '700'],
    variable: '--IBM_plex_Sans',
    display: "swap",
    adjustFontFallback: false
});


export const metadata: Metadata = {
    title: "Enum",
    description: "Future of work, Future of learning",
};

export default function RootLayout(props: { children: React.ReactNode }) {
    const { children } = props
    return (
        <html suppressHydrationWarning>
        <body>
        <Provider>
            {children}
        </Provider>
        </body>
        </html>
    )
}