"use client"
import {Heading, Text, Box, Center, Button, Flex, Grid, Image, IconButton, chakra} from "@chakra-ui/react";
import {ChevronLeftIcon, ChevronRightIcon} from "lucide-react";
import React, {useEffect, useRef, useState} from "react";

const categories = [
    "Government",
    "Property Developers",
    "Property Managers",
    "Financial Institutions",
    "Non-Governmental Organizations",
];
const ChakraNextImage = chakra(Image, {
    shouldForwardProp: (prop) => ["width", "height", "src", "alt"].includes(prop),
})

interface Partner {
    id: number
    image: string
}




export default function PartnersSection() {
    const partners: Partner[] = [
        {id: 1, image: "/img/circle.png"},
        {id: 2, image: "/img/circle.png"},
        {id: 3, image: "/img/circle.png"},
        {id: 4, image: "/img/circle.png"},
        {id: 5, image: "/img/circle.png"},
        {id: 6, image: "/img/circle.png"},
        {id: 7, image: "/img/circle.png"},
        {id: 8, image: "/img/circle.png"},
        {id: 9, image: "/img/circle.png"},
    ]

    const scrollContainerRef = useRef<HTMLDivElement>(null)
    const [showLeftArrow, setShowLeftArrow] = useState(false)
    const [showRightArrow, setShowRightArrow] = useState(true)

    useEffect(() => {
        const checkScroll = () => {
            if (!scrollContainerRef.current) return

            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
            setShowLeftArrow(scrollLeft > 0)
            setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10)
        }

        const scrollContainer = scrollContainerRef.current
        if (scrollContainer) {
            scrollContainer.addEventListener("scroll", checkScroll)
            // Initial check
            checkScroll()

            // Check on window resize
            window.addEventListener("resize", checkScroll)

            return () => {
                scrollContainer.removeEventListener("scroll", checkScroll)
                window.removeEventListener("resize", checkScroll)
            }
        }
    }, [])

    const scroll = (direction: "left" | "right") => {
        if (!scrollContainerRef.current) return

        const scrollAmount = 300
        const currentScroll = scrollContainerRef.current.scrollLeft

        scrollContainerRef.current.scrollTo({
            left: direction === "left" ? currentScroll - scrollAmount : currentScroll + scrollAmount,
            behavior: "smooth",
        })
    }

    return (
        <Box textAlign="center" py={10}>
            {/* Section Title */}
            <Center flexDirection="column" textAlign="center" mt={6}>
                <Heading as="h2" size="lg" color="#335F32" fontWeight="bold" mt="20px" position="relative" display="inline-block">
                    Our Partners
                    <Box
                        borderBottom="2px solid #335F32"
                        width="60px"
                        position="absolute"
                        bottom="-6px"
                        left="50%"
                        transform="translateX(-50%)"
                    />
                </Heading>
                <Text fontSize={{ base: "14px", md: "16px" }} fontWeight={400} color="#000000" mt="12px">
                    Organizations we’ve partnered with to make real estate in <br/> Nigeria a pleasant experience for all.
                </Text>
            </Center>

            <Flex justify="center" gap={4} mt='2%' flexWrap="wrap">
                {categories.map((category, index) => (
                    <Button
                        key={index}
                        border='1px solid'
                        variant={index === 0 ? "solid" : "outline"}
                        colorScheme="green"
                        borderRadius="50px"
                        px={6}
                        fontSize="10px"
                        fontWeight={index === 0 ? "500px" : "normal"}
                        bg={index === 0 ? "#335F32" : "white"}
                        color={index === 0 ? "white" : "#335F32"}
                        borderColor="#335F32"
                        _hover={{ bg: index === 0 ? "#335F32" : "#f0f0f0" }}
                    >
                        {category}
                    </Button>
                ))}
            </Flex>

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

            <Center as="section" py={16} px={4} mt={14}>
                <Box maxW="7xl" mx="auto">
                    <Box position="relative">
                        {showLeftArrow && (
                            <IconButton
                                icon={<ChevronLeftIcon />}
                                onClick={() => scroll("left")}
                                aria-label="Scroll left"
                                position="absolute"
                                left={0}
                                top="50%"
                                transform="translate(-16px, -50%)"
                                zIndex={10}
                                bg="white"
                                rounded="full"
                                shadow="lg"
                                display={{ base: "none", md: "flex" }}
                                size="sm"
                            />
                        )}

                        <Flex
                            ref={scrollContainerRef}
                            overflowX="auto"
                            gap='15px'
                            pb={4}

                            sx={{
                                scrollSnapType: "x mandatory",
                                msOverflowStyle: "none",
                                scrollbarWidth: "none",
                                "&::-webkit-scrollbar": {
                                    display: "none",
                                },
                            }}
                        >
                            {partners.map((partner) => (
                                <Box key={partner.id} flexShrink={0} sx={{ scrollSnapAlign: "center" }}>
                                    <Box
                                        w={{ base: "80px", md: "96px" }}
                                        h={{ base: "80px", md: "96px" }}
                                        bg="gray.200"
                                        borderRadius="full"
                                        display="flex"
                                        alignItems="center"
                                        justifyContent="center"
                                        overflow="hidden"
                                    >
                                        <Image
                                            src={partner.image}
                                            alt={partner.image}
                                        />
                                    </Box>
                                </Box>
                            ))}
                        </Flex>

                        {showRightArrow && (
                            <IconButton
                                icon={<ChevronRightIcon />}
                                onClick={() => scroll("right")}
                                aria-label="Scroll right"
                                position="absolute"
                                right={0}
                                top="50%"
                                transform="translate(16px, -50%)"
                                zIndex={10}
                                bg="white"
                                rounded="full"
                                shadow="lg"
                                display={{ base: "none", md: "flex" }}
                                size="sm"
                            />
                        )}
                    </Box>
                    <Heading
                        as="h2"
                        fontSize={{ base: "3xl", md: "4xl" }}
                        fontWeight={700}
                        textAlign="center"
                        mt='4%'
                        color="#E4E4E4"
                    >
                        Over 50 Partners
                    </Heading>
                </Box>
            </Center>
            <Button
                colorScheme="green"
                background="#335F32"
                _hover={{ background: "#2A4D27" }}
                width="196px"
                height='50px'
                borderRadius='100px'
                border='none'
                color='#fff'
            >
                View All Partners
                <Image src="/img/arrowDown.png" alt="arrowDown" width="25px" height="25px" ml='6px'/>
            </Button>
        </Box>
    );
}
