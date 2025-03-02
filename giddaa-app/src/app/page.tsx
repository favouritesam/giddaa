'use client'

import React, { useEffect } from "react"
import {useRouter} from "next/navigation";
import {Box} from "@chakra-ui/react";
const page=()=> {
    const router = useRouter();
    useEffect(() => {
        router.push('/giddaa/dashboard')
    }, []);
    return (
        <Box></Box>
    )
}
export default page

