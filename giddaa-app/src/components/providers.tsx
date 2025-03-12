"use client"; // Mark this as a client component

import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { ReactNode } from "react";

// Extend the default Chakra UI theme
const theme = extendTheme({
    config: {
        initialColorMode: "light", // Set to "light" or "dark"
        useSystemColorMode: false, // Disable system color mode to avoid mismatches
    },
});

export default function Providers({ children }: { children: ReactNode }) {
    return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}