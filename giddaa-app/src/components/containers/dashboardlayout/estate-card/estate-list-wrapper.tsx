"use client";
import dynamic from "next/dynamic";
import { Spinner, Flex } from "@chakra-ui/react";

// Dynamically import EstateList with SSR disabled
const EstateList = dynamic(() => import("./estate-list"), {
    ssr: false, // Disable server-side rendering
    loading: () => (
        <Flex justify="center" align="center" height="200px">
            <Spinner size="xl" />
        </Flex>
    ), // Optional: Add a loading fallback
});

export default EstateList; // Ensure this export is present