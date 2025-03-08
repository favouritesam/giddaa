"use client"

import Image from "next/image"
import { Box, Container, Heading, Text, Link, Circle } from "@chakra-ui/react"
import { PlayIcon } from "@heroicons/react/24/solid"

export default function AboutUsSection() {
    return (
        <Box py={{ base: 12, md: 20 }}>
            <Container maxW="container.xl">
                <Box textAlign="center" mb={8}>
                    <Heading
                        as="h2"
                        fontSize={{ base: "2xl", md: "3xl" }} fontWeight="bold" color="green.800" mb={4}>
                        Know More About Us
                    </Heading>
                    <Text color="gray.600" mb={2}>
                        From our team's tips to your ears – let's tell you about
                    </Text>
                    <Link color="green.700" fontWeight="medium">
                        Giddaa.
                    </Link>
                </Box>

                <Box
                    position="relative"
                    borderRadius="2xl"
                    overflow="hidden"
                    maxW="container.md"
                    mx="auto"
                    h={{ base: "300px", md: "400px" }}
                >
                    <Image src="/placeholder.svg?height=400&width=800" alt="About Giddaa" fill style={{ objectFit: "cover" }} />
                    <Box position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)">
                        <Circle size="60px" bg="white" opacity="0.9"
                                display="flex" alignItems="center" justifyContent="center">
                            <PlayIcon className="h-8 w-8 text-green-700" />
                        </Circle>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

