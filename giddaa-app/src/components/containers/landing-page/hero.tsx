"use client"
import {Box, Button, Container, Flex, Heading, Text, Image, Center} from "@chakra-ui/react"
import React from "react";

export default function Hero() {
    return (
        <Box position="relative" overflow="hidden" mt='4%'>
            <Container maxW="container.xl" py={{ base: 8, md: 12 }}>
                <Box
                    maxWidth="309px"
                    h="109px"
                    justifyContent="end"
                    border="2px solid"
                    borderColor="transparent"
                    bg="#F9FAFB"
                    position="absolute"
                    top="1%"
                    right="2%"
                    borderRadius="xl"
                    boxShadow="md"
                    p={4}
                    maxW="300px"
                    display={{ base: "none", md: "block" }}
                    _before={{
                        content: '""',
                        position: "absolute",
                        inset: 0,
                        borderRadius: "12px",
                        padding: "2px",
                        background: "linear-gradient(to right, #B8860B, #013220)",
                        WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                        WebkitMaskComposite: "destination-out",
                    }}
                >
                    <Flex align="center" gap={4} mt='4%'>
                        <Image src="/img/WavingHand.png" alt="wave icon" w="44px" h="44px"/>
                        <Box>
                            <Text fontSize="16px" fontWeight={700}>You’re Now on Giddaa
                                <Text as="span" fontSize="16px" fontWeight={700} color="#346633">Buy</Text></Text>
                            <Text fontSize="12px" fontWeight={400} color="#000000"
                                  lineHeight="23px" wordBreak="break-word">Find and buy your dream home on various purchase plans.</Text>
                        </Box>
                    </Flex>
                </Box>

                <Box textAlign="center" mt='2%'>
                    <Flex justify="center" align="center" mb="2%" gap='6%'>
                        <Flex
                            w="486px"
                            h="46px"
                            bg="linear-gradient(to right, #FFFFFF, #FEF6E0)"
                            borderRadius="100px"
                            align="center"
                            justify="center"
                            px={4}
                            boxShadow="md"
                            border="1px solid #E5E5E5"
                        >
                            <Flex flex="1" justify="center">
                                <Text fontSize="10px" fontWeight="700" color="#335F32" textAlign="center">
                                    WE SERVE NIGERIANS ACROSS THE GLOBE
                                </Text>
                            </Flex>
                            <Box h="60%" w="1px" bg="#D9D9D9"/>
                            <Flex flex="1" align="center" justify="center" gap={6}>
                                <Image
                                    src="/img/view.png"
                                    alt="views"
                                    width="15px" h="15px"/>
                                <Text fontSize="10px" fontWeight="700" color="#335F32" textAlign="center">
                                    10,000 PEOPLE HAVE SEEN THIS
                                </Text>
                            </Flex>
                        </Flex>
                    </Flex>


                    <Heading as="h1" fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }} fontWeight="bold" lineHeight="1.2" mb={4}>
                        <Text fontSize='48px' fontWeight={700} color="black" lineHeight="1.2" textAlign="center">
                            Find a Home to Buy In Nigeria
                            <br/>
                            On Various <Text as="span" color="#0A7E32">Purchase Plans.</Text>
                        </Text>
                    </Heading>

                    <Text fontSize={{ base: "md", lg: "lg" }} color="gray.600" maxW="container.md" mx="auto" mt='1%'>
                        <Text fontSize="14px" color="#000000" fontWeight={400} maxW="2xl" lineHeight="28px">
                            We have taken real estate beyond{" "}
                            <Text as="span" textDecoration="underline" color="#000000">mere listings</Text>. Conduct
                            secure real estate transactions on our platform.
                            <br />
                            Trusted by more than{" "}
                            <Text as="span" fontWeight="bold">4,000 customers</Text>, and{" "}
                            <Text as="span" fontWeight="bold">30+ companies</Text>.
                        </Text>
                    </Text>

                    <Flex justify='center' align='center' mt='2%'>
                        <Button
                            w='236px'
                            h='60px'
                            mt={6}
                            px={6}
                            py={3}
                            border='none'
                            borderRadius="100px"
                            bg="#335F32"
                            color="white"
                            fontSize="13px"
                            fontWeight={700}
                            shadow="lg"
                            _hover={{bg: "#335F32"}}
                            gap={4}
                        >
                            Explore Our Products
                            <Image src="/img/arrowDown.png" alt="arrowDown" width="25px" height="25px"/>
                        </Button>
                    </Flex>
                </Box>


                <Center gap={{ base: 6, md: 8 }} flexWrap={{ base: "wrap", md: "nowrap" }} mt='6%'>
                    <Center borderRadius="lg" overflow="hidden" flex="1" maxW={{ base: "100%", md: "33%" }}>
                        <Image
                            src="/img/first.png"
                            alt="house"
                            width={400}
                            height={300}
                            className="w-full h-auto object-cover"
                        />
                        <Image
                            src="/img/second.png"
                            alt="house"
                            width={400}
                            height={300}
                            className="w-full h-auto object-cover"
                        />
                        <Image
                            src="/img/third.png"
                            alt="house"
                            width={400}
                            height={300}
                            className="w-full h-auto object-cover"
                        />
                    </Center>
                </Center>
            </Container>
        </Box>
    )
}

