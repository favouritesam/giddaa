import type React from "react"
import {Box, Heading, Text, Grid, Flex, Button, Icon, ChakraProvider, extendTheme, Image} from "@chakra-ui/react"
import { FaHome, FaBuilding, FaChartLine, FaHandshake, FaCogs, FaBriefcase } from "react-icons/fa"
import {useRouter} from "next/navigation";

const getStartedTheme = extendTheme({
    colors: {
        green: {
            500: "#2E7D32",
            600: "#1B5E20",
        },
        gray: {
            200: "#E5E7EB",
            600: "#4B5563",
            700: "#374151",
        },
    },
    components: {
        Button: {
            baseStyle: {
                fontWeight: "medium",
            },
            variants: {
                solid: {
                    bg: "#335F32",
                    color: "white",
                    _hover: {
                        bg: "#335F32",
                    },
                },
            },
        },
    },
})

interface CardProps {
    title: string
    description: string
    icon: React.ReactElement
}

const GetStartedCard: React.FC<CardProps> = ({ title, description, icon }) => {
    const router = useRouter();

    const handleGetStarted = () => {
        router.push("/login")
    }
    return (
        <Box borderWidth="2px" borderRadius="xl" p={4} className="flex flex-col h-full" borderColor="#335F32">
            <Flex direction="column" h="full">
                <Box mb={2}>{icon}</Box>
                <Heading as="h3" size="md" mb={2} fontWeight="bold">
                    {title}
                </Heading>
                <Text fontSize="16px" fontWeight={400} color="gray.600" mb={4} flex="1">
                    {description}
                </Text>
                <Button
                    size="sm"
                    h='40px'
                    bg="#335F32"
                    className="mt-auto"
                    borderRadius="100px"
                    onClick={handleGetStarted}
                >
                    Get Started Now
                    <Image src="/img/pointUp.png" alt="pointUp" width="25px" height="25px" ml='6px'/>
                </Button>
            </Flex>
        </Box>
    )
}

export default function GetStarted() {
    const cards = [
        {
            title: "Buy",
            icon: <Icon as={FaHome} boxSize={6} color="gray.700" />,
            description: "Find homes and land to buy in best cities, with exciting features when you search.",
        },
        {
            title: "ShortLets",
            icon: <Icon as={FaBuilding} boxSize={6} color="gray.700" />,
            description: "Explore high-quality short lets, with no booking fees and hassle-free.",
        },
        {
            title: "Invest",
            icon: <Icon as={FaChartLine} boxSize={6} color="gray.700" />,
            description: "Explore high-quality short lets, with no booking fees and hassle-free.",
        },
        {
            title: "Sell",
            icon: <Icon as={FaHandshake} boxSize={6} color="gray.700" />,
            description: "Explore high-quality short lets, with no booking fees and hassle-free.",
        },
        {
            title: "Services",
            icon: <Icon as={FaCogs} boxSize={6} color="gray.700" />,
            description: "Explore high-quality short lets, with no booking fees and hassle-free.",
        },
        {
            title: "Enterprise",
            icon: <Icon as={FaBriefcase} boxSize={6} color="gray.700" />,
            description: "Explore high-quality short lets, with no booking fees and hassle-free.",
        },
    ]

    return (
        <ChakraProvider theme={getStartedTheme}>
            <Image src="img/curveLine.png" mt='6%' w='100%'/>

            <Box maxW="7xl" mx="auto" px={4} py={8} className="rounded-3xl border border-gray-200" mt='-115%'>
                <Box textAlign="center" mb={8}>
                    <Heading as="h2" size="lg" color="#335F32" fontWeight="bold" mt="20px" position="relative" display="inline-block">
                        Get Started
                        <Box
                            borderBottom="2px solid #335F32"
                            width="60%"
                            position="absolute"
                            bottom="-6px"
                            left="50%"
                            transform="translateX(-50%)"
                        />
                    </Heading>

                    <Text fontSize={{ base: "14px", md: "16px" }} fontWeight={400} color="gray.700" mt="2%">
                        Have a try for free! What are you looking for? Get started <br />
                        with one of the products listed.
                    </Text>
                </Box>

                <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }} gap={6}>
                    {cards.map((card, index) => (
                        <GetStartedCard key={index} title={card.title} description={card.description} icon={card.icon} />
                    ))}
                </Grid>
            </Box>
        </ChakraProvider>
    )
}

