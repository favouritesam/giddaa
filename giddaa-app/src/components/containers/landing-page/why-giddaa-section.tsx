"use client"

import React, {useState} from "react"
import {
    Box,
    Container,
    Flex,
    Heading,
    Text,
    useColorModeValue,
    VStack,
    Image, Button
} from "@chakra-ui/react"


const categories = ["BUY", "SHORT LETS", "INVEST", "SELL", "SERVICES", "ENTERPRISE"]

const features = [
    {title: "Stay Fully Booked", description: "Order from our vendors and restaurant up till 12am"},
    {title: "Stay Fully Booked", description: "Order from our vendors and restaurant up till 12am"},
    {title: "Stay Fully Booked", description: "Order from our vendors and restaurant up till 12am"},
];

export default function WhyGiddaaSection() {
    const [activeCategory, setActiveCategory] = useState("BUY")
    const bgColor = useColorModeValue("gray.50", "gray.900")

    return (
        <Box bg={bgColor} py={{base: 12, md: 20}} borderRadius="3xl">
            <Image src="img/curveLine.png" mt='6%' w='100%'/>
            <Container maxW="container.xl" mt='-110%'>
                <Box textAlign="center" mb={8}>
                    <Heading as="h2" fontSize={{base: "2xl", md: "3xl"}} color="#335F32" fontWeight="bold" mt="20px"
                             position="relative" display="inline-block">
                        Why Giddaa?
                        <Box
                            borderBottom="2px solid #335F32"
                            width="60px"
                            position="absolute"
                            bottom="-6px"
                            left="50%"
                            transform="translateX(-50%)"
                        />
                    </Heading>
                    <Text color="#000000" maxW="container.md" mx="auto" fontWeight={400} fontSize='16px' mt='1%'>
                        Reasons why you should embark on your real estate journey with <br/> us, and our products..
                    </Text>
                </Box>

                <Flex justify="center" flexWrap="wrap" gap={12} mt={16}>
                    {categories.map((category) => (
                        <Button
                            key={category}
                            size="md"
                            variant="outline"
                            borderRadius="50px"
                            px={14}
                            py={2}
                            fontSize="10px"
                            fontWeight={400}
                            borderColor="#335F32"
                            bg={activeCategory === category ? "#335F32" : "white"}
                            color={activeCategory === category ? "white" : "#335F32"}
                            border="1px solid"
                            cursor="pointer"
                            _hover={{
                                bg: activeCategory === category ? "#335F32" : "gray.100",
                            }}
                            onClick={() => setActiveCategory(category)}
                        >
                            {category}
                        </Button>

                    ))}
                </Flex>

                <Flex
                    justifyContent="center"
                    gap={10}
                    mt='4%'
                >
                    {features.map((feature, index) => (
                        <Box
                            key={index}
                            width="306px"
                            h='190px'
                            borderRadius="16px"
                            border='2px solid #335F32'
                            p={6}
                            bg="white"
                            boxShadow="sm"
                            _hover={{ boxShadow: "md" }}
                        >
                            <VStack align="flex-start" py={12} px={16}>
                                <Image src="img/gr.png"/>
                                <Heading as="h3" fontSize="lg" fontWeight="bold" mt='10px'>
                                    {feature.title}
                                </Heading>
                                <Text color="#000000" fontWeight={400} fontSize='16px' mt='4px'>{feature.description}</Text>
                            </VStack>
                        </Box>
                    ))}
                </Flex>

            </Container>
        </Box>
    )
}

