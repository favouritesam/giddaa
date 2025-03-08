// // import {Box} from "@chakra-ui/react";
// // import Navbar from "@/components/containers/landing-page/navbar/navbar";
// // import RealEstateHero from "@/components/containers/landing-page/find-a-home";
// //
// // export default function NavbarPage(){
// //     return(
// //         <Box>
// //             <Navbar/>
// //             <RealEstateHero/>
// //         </Box>
// //     )
// // }


"use client"

import AboutUsSection from "@/components/containers/landing-page/about-us-section"
import Hero from "@/components/containers/landing-page/hero"
import Navbar from "@/components/containers/landing-page/navbar"
import PartnersSection from "@/components/containers/landing-page/partners-section"
import TestimonialsSection from "@/components/containers/landing-page/testimonials-section"
import WhyGiddaaSection from "@/components/containers/landing-page/why-giddaa-section"
import { Box, useColorModeValue } from "@chakra-ui/react"
import GetStartedSection from "@/components/containers/landing-page/get-started-section";
import GaddaaProducts from "@/components/containers/landing-page/gaddaa-products";


export default function Home() {
    const bgColor = useColorModeValue("white", "gray.800")

    return (
        <Box bg={bgColor} minH="100vh">
            <Navbar />
            <Hero />
            <GaddaaProducts/>
            <PartnersSection />
            {/*<WhyGiddaaSection />*/}
            {/*<TestimonialsSection />*/}
            {/*<AboutUsSection />*/}
            {/*<GetStartedSection />*/}
        </Box>
    )
}

