import { Heading, Text, Box, Center, Button, Flex, Grid, Image } from "@chakra-ui/react";
import React from "react";

const categories = [
    "Government",
    "Property Developers",
    "Property Managers",
    "Financial Institutions",
    "Non-Governmental Organizations",
];

export default function PartnersSection() {
    return (
        <Box textAlign="center" py={10}>
            {/* Section Title */}
            <Center flexDirection="column" textAlign="center" mt={6}>
                <Heading as="h2" size="lg" color="#335F32" fontWeight="bold" mt="20px" position="relative" display="inline-block">
                    Our Partners
                    <Box
                        borderBottom="4px solid #335F32"
                        width="60px"
                        position="absolute"
                        bottom="-6px"
                        left="50%"
                        transform="translateX(-50%)"
                    />
                </Heading>
                <Text fontSize={{ base: "14px", md: "16px" }} fontWeight={400} color="gray.700" mt="12px">
                    Organizations we’ve partnered with to make real estate in Nigeria a pleasant experience for all.
                </Text>
            </Center>

            {/* Category Filters */}
            <Flex justify="center" gap={4} mt={6} flexWrap="wrap">
                {categories.map((category, index) => (
                    <Button
                        key={index}
                        variant={index === 0 ? "solid" : "outline"}
                        colorScheme="green"
                        borderRadius="full"
                        px={6}
                        fontSize="14px"
                        fontWeight={index === 0 ? "bold" : "normal"}
                        bg={index === 0 ? "#335F32" : "white"}
                        color={index === 0 ? "white" : "#335F32"}
                        borderColor="#335F32"
                        _hover={{ bg: index === 0 ? "#2A4D27" : "#f0f0f0" }}
                    >
                        {category}
                    </Button>
                ))}
            </Flex>

            {/* Partner Logos Placeholder */}
            <Flex justify="center" gap={6} mt={10} flexWrap="wrap">
                {[...Array(8)].map((_, index) => (
                    <Box
                        key={index}
                        w={{ base: "50px", md: "70px" }}
                        h={{ base: "50px", md: "70px" }}
                        bg="gray.300"
                        borderRadius="full"
                    />
                ))}
            </Flex>

            {/* Partner Count & View All Button */}
            <Text fontSize="20px" fontWeight={600} color="gray.500" mt={8}>
                Over 50 Partners
            </Text>

            <Button
                colorScheme="green"
                background="#335F32"
                _hover={{ background: "#2A4D27" }}
                width="180px"
                height="50px"
                borderRadius="100px"
                color="#fff"
                mt={6}
                rightIcon={<Image src="/img/arrowDown.png" alt="arrowDown" width="20px" height="20px" />}
            >
                View All Partners
            </Button>
        </Box>
    );
}
