"use client"

import {Box, Container, Heading, Text, Link, Image} from "@chakra-ui/react"
import React from "react";


export default function AboutUsSection() {
    return (
        <Box py={{base: 12, md: 20}}>
            <Container maxW="container.xl">
                <Box textAlign="center" mt='4%'>
                    <Heading as="h2" fontSize={{base: "2xl", md: "3xl"}} color="#335F32" fontWeight="bold" mt="10px"
                             position="relative" display="inline-block">
                        Know More About Us
                        <Box
                            borderBottom="2px solid #335F32"
                            width="60px"
                            position="absolute"
                            bottom="-6px"
                            left="50%"
                            transform="translateX(-50%)"
                        />
                    </Heading>
                    <Text color="gray.600" mt={14}>
                        From our team's tips to your ears – let's tell you about
                    </Text>
                    <Link color="green.700" fontWeight="medium">
                        Giddaa.
                    </Link>
                </Box>


                <Box
                    border="1px solid #335F32"
                    borderRadius="40px"
                    maxW="900px"
                    mx="auto"
                    position="relative"
                    overflow="hidden"
                    mt='4%'
                >
                    <Box flex="1" position="relative" cursor='pointer'>
                        <Image
                            src="/img/smileGirl.png"
                            alt="Testimonial Image"
                            width={900}
                            height={400}
                            objectFit="cover"
                        />
                        <Image src="img/C.png"  position="absolute" top="38%" left="43%" w='76.51px' h='76px'/>
                        <Image src="img/vidI.png"  position="absolute" top="42%" left="46%" w='23.16px' h='34px'/>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

