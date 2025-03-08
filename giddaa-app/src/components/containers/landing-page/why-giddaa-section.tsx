"use client"

import { useState } from "react"
import { Box, Container, Flex, Heading, Text, useColorModeValue, Tag, SimpleGrid, Icon, VStack } from "@chakra-ui/react"
import { HomeIcon } from "@heroicons/react/24/outline"

const categories = ["BUY", "SHORT LETS", "INVEST", "SELL", "SERVICES", "ENTERPRISE"]

export default function WhyGiddaaSection() {
    const [activeCategory, setActiveCategory] = useState("BUY")
    const bgColor = useColorModeValue("gray.50", "gray.900")

    return (
        <Box bg={bgColor} py={{ base: 12, md: 20 }} borderRadius="3xl">
            <Container maxW="container.xl">
                <Box textAlign="center" mb={8}>
                    <Heading as="h2" fontSize={{ base: "2xl", md: "3xl" }} fontWeight="bold" color="green.800" mb={4}>
                        Why Giddaa?
                    </Heading>
                    <Text color="gray.600" maxW="container.md" mx="auto">
                        Reasons why you should embark on your real estate journey with us, and our products.
                    </Text>
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

                <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
                    {Array.from({ length: 3 }).map((_, i) => (
                        <Box key={i} borderWidth="1px" borderRadius="lg" overflow="hidden" bg="white" p={6}>
                            <VStack align="flex-start" spacing={4}>
                                <Box className="p-3 rounded-md bg-gray-100">
                                    <Icon as={HomeIcon} boxSize={6} color="green.700" />
                                </Box>
                                <Heading as="h3" fontSize="lg" fontWeight="bold">
                                    Stay Fully Booked
                                </Heading>
                                <Text color="gray.600">Order from our vendors and restaurant up till 12am</Text>
                            </VStack>
                        </Box>
                    ))}
                </SimpleGrid>
            </Container>
        </Box>
    )
}

