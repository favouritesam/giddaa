"use client"

import AboutUsSection from "@/components/containers/landing-page/about-us-section"
import Hero from "@/components/containers/landing-page/hero"
import Navbar from "@/components/containers/landing-page/navbar"
import PartnersSection from "@/components/containers/landing-page/partners-section"
import TestimonialsSection from "@/components/containers/landing-page/testimonials-section"
import WhyGiddaaSection from "@/components/containers/landing-page/why-giddaa-section"
import { Box, useColorModeValue } from "@chakra-ui/react"
import GaddaaProducts from "@/components/containers/landing-page/gaddaa-products";
import {useEffect, useState} from "react";
import GetStarted from "@/components/containers/landing-page/get-started-section";
import Footer from "@/components/containers/landing-page/footer"


export default function Home() {
    const bgColor = useColorModeValue("white", "gray.800")

    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])
    if (!isClient) {
        return null; // Avoid rendering until the component is mounted
    }

    return (
        <Box bg={bgColor} minH="100vh">
            <Navbar />
            <Hero />
            <GaddaaProducts/>
            <PartnersSection />
            <WhyGiddaaSection />
            <TestimonialsSection />
            <AboutUsSection />
            <GetStarted/>
            <Footer/>
        </Box>
    )
}

