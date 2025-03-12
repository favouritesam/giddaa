"use client"

import React, {useState} from "react"
import {Box, Container, Flex, Heading, Text, VStack, Image, Button} from "@chakra-ui/react"


const categories = ["BUY", "SHORT LETS", "INVEST", "SELL", "SERVICES", "ENTERPRISE"]

export default function TestimonialsSection() {
    const [activeCategory, setActiveCategory] = useState("BUY")

    return (
        <Box py={{base: 12, md: 20}}>
            <Container maxW="container.xl">
                <Box textAlign="center" mt='10%'>
                    <Heading as="h2" fontSize={{base: "2xl", md: "3xl"}} color="#335F32" fontWeight="bold" mt="10px"
                             position="relative" display="inline-block">
                        People Talk
                        <Box
                            borderBottom="2px solid #335F32"
                            width="60px"
                            position="absolute"
                            bottom="-6px"
                            left="50%"
                            transform="translateX(-50%)"
                        />
                    </Heading>
                    <Text color="#000000" maxW="container.md" mx="auto" fontWeight={400} fontSize='16px' mt='12px'>
                        What our customers and partners think about us.
                    </Text>
                </Box>

                <Flex justify="center" flexWrap="wrap" gap={12} mt='2%'>
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
                    border="1px solid #335F32"
                    borderRadius="40px"
                    pl={6}
                    align="center"
                    maxW="900px"
                    mx="auto"
                    h='500px'
                    position="relative"
                    bg="linear-gradient(135deg, #FFEDCB, #F6FDF4, #FFFFFB)"
                    overflow="hidden"
                    mt='4%'
                >
                    <VStack align="flex-start" spacing={3} flex="1" p={6} mb='4%'>
                        <Image
                            src="img/smileGirl.png"
                            alt="Profile"
                            borderRadius="16px"
                            width="226px"
                            height="215px"
                            objectFit="cover"
                        />
                        <Heading as="h3" fontSize="lg" fontWeight="bold">
                            Chima Okereke
                        </Heading>
                        <Text fontSize="12px" fontWeight={700} color="#335F32">
                            DIRECTOR OF SALES AT BILAAD REALTY
                        </Text>
                        <Text fontSize="16px" fontWeight={400} mt='-0%' color="gray.600">
                            "I had an outstanding experience with the short-let booking service!
                            From start to finish, the team made the entire process smooth and easy.
                            I needed help finding the perfect place for my stay,
                            and they went above and beyond to locate
                            a property that fit all my requirements.
                            Once I confirmed and made the payment,
                            they handled the reservation with great efficiency.
                        </Text>
                    </VStack>

                    <Box flex="1" position="relative" w='100%'
                         h='100%'>
                        <Image
                            src="img/smileGirl.png"
                            alt="Testimonial Image"
                            borderRadius="md"
                            objectFit="cover"
                            w='100%'
                            h='100%'
                        />
                        <Image src="img/C.png" position="absolute" top="44%" left="42%" w='76.51px' h='76px'/>
                        <Image src="img/vidI.png" position="absolute" top="48%" left="49%"/>
                    </Box>

                    <VStack
                        position="absolute"
                        right="-40px"
                        top="50%"
                        transform="translateY(-50%)"
                        spacing={4}
                    >
                        <Box
                            width="30px"
                            height="30px"
                            borderRadius="full"
                            bg="#335F32"
                            color="white"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            fontWeight="bold"
                        >
                            1
                        </Box>
                        <Box width="2px" height="40px" bg="gray.300"/>
                        <Box width="30px" height="30px" borderRadius="full" bg="gray.300"/>
                        <Box width="2px" height="40px" bg="gray.300"/>
                        <Box width="30px" height="30px" borderRadius="full" bg="gray.300"/>
                    </VStack>
                </Flex>

            </Container>
        </Box>
    )
}

