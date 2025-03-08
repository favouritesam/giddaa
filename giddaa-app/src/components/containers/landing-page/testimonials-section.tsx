"use client"

import { useState } from "react"
import Image from "next/image"
import { Box, Container, Flex, Heading, Text, Tag, VStack, Circle, Icon } from "@chakra-ui/react"
import { PlayIcon } from "@heroicons/react/24/solid"

const categories = ["BUY", "SHORT LETS", "INVEST", "SELL", "SERVICES", "ENTERPRISE"]

export default function TestimonialsSection() {
    const [activeCategory, setActiveCategory] = useState("BUY")
    const [activeTestimonial, setActiveTestimonial] = useState(0)

    return (
        <Box py={{ base: 12, md: 20 }}>
            <Container maxW="container.xl">
                <Box textAlign="center" mb={8}>
                    <Heading as="h2" fontSize={{ base: "2xl", md: "3xl" }} fontWeight="bold" color="green.800" mb={4}>
                        People Talk
                    </Heading>
                    <Text color="gray.600">What our customers and partners think about us.</Text>
                </Box>

                <Flex justify="center" flexWrap="wrap" gap={2} mb={10}>
                    {categories.map((category) => (
                        <Tag
                            key={category}
                            size="md"
                            variant={activeCategory === category ? "solid" : "outline"}
                            colorScheme={activeCategory === category ? "green" : "gray"}
                            borderRadius="full"
                            px={4}
                            py={2}
                            cursor="pointer"
                            onClick={() => setActiveCategory(category)}
                        >
                            {category}
                        </Tag>
                    ))}
                </Flex>

                <Box position="relative" borderWidth="1px" borderRadius="2xl" overflow="hidden" mb={10}>
                    <Flex direction={{ base: "column", md: "row" }}>
                        <Box p={8} flex="1">
                            <VStack align="flex-start" spacing={4}>
                                <Heading as="h3" fontSize="xl" fontWeight="bold">
                                    Chima Okereke
                                </Heading>
                                <Text fontSize="sm" color="gray.600" textTransform="uppercase" fontWeight="medium">
                                    DIRECTOR OF SALES AT BILAD REALTY
                                </Text>
                                <Text fontSize="md" color="gray.700">
                                    "I had an outstanding experience with the short-let booking service! From start to finish, the team
                                    made the entire process smooth and easy. I needed help finding the perfect place for my stay, and they
                                    went above and beyond to locate a property that fit all my requirements. Once I confirmed and made the
                                    payment, they handled the reservation with great efficiency."
                                </Text>
                            </VStack>
                        </Box>
                        <Box flex="1" position="relative" minH={{ base: "300px", md: "auto" }}>
                            <Image
                                src="/placeholder.svg?height=400&width=400"
                                alt="Chima Okereke"
                                fill
                                style={{ objectFit: "cover" }}
                            />
                            <Box position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)">
                                <Circle size="50px" bg="white" opacity="0.9" display="flex" alignItems="center" justifyContent="center">
                                    <Icon as={PlayIcon} color="green.700" boxSize={6} />
                                </Circle>
                            </Box>
                        </Box>
                    </Flex>

                    <Box position="absolute" right={4} top="50%" transform="translateY(-50%)">
                        <VStack spacing={4}>
                            {[0, 1, 2, 3].map((index) => (
                                <Circle
                                    key={index}
                                    size="30px"
                                    bg={activeTestimonial === index ? "green.700" : "gray.200"}
                                    cursor="pointer"
                                    onClick={() => setActiveTestimonial(index)}
                                />
                            ))}
                        </VStack>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

