import {Heading, Text, Box, Center, Button, Flex, Grid, Image} from "@chakra-ui/react";
import React from "react";

const cards = [
    {
        title: "Buy",
        description: "Explore and purchase your home from top developers & vetted property sellers (With land titles) on various purchase plans and long-term loan options.",
        buttonText: "Find a Home to Buy",
        image: "/img/lover1.png",
        borderColor: "linear-gradient(to right, #FFC86A, #335F32)",
        layout: "row",
    },
    {
        title: "Short Lets",
        description: "Find your next getaway spot, staycation, or business trip spot. Avoid extra charges, find detailed information, and reserve a short let.",
        buttonText: "Reserve a Short Let",
        image: "/img/lover2.png",
        borderColor: "linear-gradient(to right, #335F32, #FFC86A)",
        layout: "row"
    },
    {
        title: "Invest",
        description: "Become a real estate investor without breaking the bank. Invest in real estate assets and grow your portfolio with friends and family (in a private investment group) or with the public (fractionally, like a stock exchange).",
        buttonText: "Find an Investment",
        buttonText2: "Learn More",
        image: "/img/image3.png",
        borderColor: "linear-gradient(to right, #FFC86A, #335F32)",
        layout: "column"
    },
    {
        title: "Sell",
        description: "Sell your property with us, a company and partner you can trust. Our simple process makes it easy for sellers to list their properties and sell their properties on various purchase plans to the 1000's of potential buyers who visit Giddaa monthly.",
        buttonText: "Sell Your Property",
        buttonText2: "Talk To Our Team",
        image: "/img/image4.png",
        borderColor: "linear-gradient(to right, #335F32, #FFC86A)",
        layout: "column"
    },
    {
        title: "Services",
        description: "Explore and purchase homes from top developers & vetted property sellers (With land titles) on various purchase plans.",
        buttonText: "Find a Home to Buy",
        image: "/img/lover3.png",
        borderColor: "linear-gradient(to right, #FFC86A, #335F32)",
        layout: "row",
    },
    {
        title: "Enterprise",
        description: (
            <>
                We’ve built solutions & tools for property developers, and property managers specifically operating in the Nigerian Market -
                <Text as="span" fontSize="16px" fontWeight="700">
                    Our solutions fit like a glove.
                </Text>
            </>
        ),
        buttonText: "Reserve a Short Let",
        image: "/img/lover4.png",
        borderColor: "linear-gradient(to right, #335F32, #FFC86A)",
        layout: "row"
    },

];

export default function GaddaaProducts() {
    return (
        <Box position="relative" w="100%" textAlign="center">
            <Image src="img/curveLine.png" mt='6%' w='100%'/>

            <Center p={6} flexDirection="column" textAlign="center" mt='-114%' >
                <Heading as="h2" size="lg" color="#335F32" fontWeight="bold" mt="20px" position="relative" display="inline-block">
                    Products
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
                    Get started with one of our carefully crafted products <br />
                    & services.
                </Text>
            </Center>



            <Center>
                <Flex flexWrap="wrap" justify="center" gap={10} maxW="1226px">
                    {cards.map((card, index) => (
                        <Box
                            key={index}
                            position="relative"
                            borderRadius="40px"
                            overflow="hidden"
                            background="white"
                            boxShadow="lg"
                            width={{ base: "100%", md: "48%" }}
                            maxW="595px"
                            _before={{
                                content: '""',
                                position: "absolute",
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                borderRadius: "40px",
                                padding: "2px",
                                background: card.borderColor,
                                WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                WebkitMaskComposite: "xor",
                                maskComposite: "exclude",
                            }}
                        >
                            <Flex
                                flex="1"
                                direction={card.layout === "row" ? { base: "column", md: "row" } : "column"}
                                align="flex-start"
                                borderRadius="40px"
                                background="white"
                            >
                                <Box flex="1" p={18} textAlign="left">
                                    <Heading size="md" color="#335F32" mb={2} textAlign="left">
                                        {card.title}
                                    </Heading>
                                    <Text fontSize="16px" fontWeight={400} textAlign="left" color="#000000" mb={4}>
                                        {card.description}
                                    </Text>
                                    <Flex gap={6} flexWrap="wrap" justifyContent="flex-start">
                                        <Button
                                            colorScheme="green"
                                            background="#335F32"
                                            _hover={{ background: "#2A4D27" }}
                                            width="196px"
                                            height='50px'
                                            borderRadius='100px'
                                            border='none'
                                            color='#fff'
                                            mt='10%'
                                        >
                                            {card.buttonText}
                                            <Image src="/img/arrowDown.png" alt="arrowDown" width="25px" height="25px" ml='6px'/>
                                        </Button>

                                        {card.buttonText2 && (
                                            <Button
                                                variant="outline"
                                                borderColor="#335F32"
                                                color="#335F32"
                                                width="165px"
                                                height='50px'
                                                borderRadius='100px'
                                                bg='#FFFFFF'
                                                mt='10%'
                                                _hover={{ background: "#f0f0f0" }}
                                            >
                                                {card.buttonText2}
                                            </Button>
                                        )}
                                    </Flex>
                                </Box>
                                {card.layout === "row" && (
                                    <Image
                                        src={card.image}
                                        alt={card.title}
                                        w="283px"
                                        objectFit="cover"
                                        borderRadius="10px"
                                        ml={{ md: 5 }}
                                        alignSelf="center"
                                    />
                                )}
                            </Flex>

                            {card.layout === "column" && (
                                <Image
                                    src={card.image}
                                    alt={card.title}
                                    w="100%"
                                    h="250px"
                                    objectFit="cover"
                                    borderRadius="0 0 40px 40px"
                                />
                            )}
                        </Box>
                    ))}
                </Flex>

            </Center>

        </Box>
    );
}
