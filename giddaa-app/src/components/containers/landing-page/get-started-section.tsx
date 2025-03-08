"use client"

import { Box, Button, Container, Heading, Text, SimpleGrid, Icon, VStack, useColorModeValue } from "@chakra-ui/react"
import { ArrowForwardIcon } from "@chakra-ui/icons"
import {
    HomeIcon,
    BuildingOfficeIcon,
    BanknotesIcon,
    TagIcon,
    WrenchScrewdriverIcon,
    BuildingStorefrontIcon,
} from "@heroicons/react/24/outline"
import {useRouter} from "next/navigation";

const services = [
    {
        title: "Buy",
        description: "Find homes on various purchase plans; apply to buy them with your account.",
        icon: HomeIcon,
    },
    {
        title: "Short Lets",
        description: "Explore high quality short lets, with no booking fees and receive them.",
        icon: BuildingOfficeIcon,
    },
    {
        title: "Invest",
        description: "Explore high quality short lets, with no booking fees and receive them.",
        icon: BanknotesIcon,
    },
    {
        title: "Sell",
        description: "Explore high quality short lets, with no booking fees and receive them.",
        icon: TagIcon,
    },
    {
        title: "Services",
        description: "Explore high quality short lets, with no booking fees or design them.",
        icon: WrenchScrewdriverIcon,
    },
    {
        title: "Enterprise",
        description: "Explore high quality short lets, with no booking fees and receive them.",
        icon: BuildingStorefrontIcon,
    },
]

export default function GetStartedSection() {
    const bgColor = useColorModeValue("gray.50", "gray.900")
    const router = useRouter();

    const handleGetStarted = () => {
        router.push("/login")
    }

    return (
        <Box bg={bgColor} py={{ base: 12, md: 20 }} borderRadius="3xl" mb={16}>
            <Container maxW="container.xl">
                <Box textAlign="center" mb={12}>
                    <Heading as="h2"
                             fontSize={{ base: "2xl", md: "3xl" }}
                             fontWeight="bold" color="green.800" mb={4}
                             onClick={handleGetStarted}
                    cursor='pointer'>
                        Get Started
                    </Heading>
                    <Text color="gray.600" maxW="container.md" mx="auto">
                        Made it this far? What are you waiting for? Get started with one of our products today!
                    </Text>
                </Box>

                <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
                    {services.map((service, index) => (
                        <Box key={index} borderWidth="1px" borderRadius="lg" overflow="hidden" bg="white" p={6}>
                            <VStack align="flex-start" spacing={4}>
                                <Box className="p-3 rounded-md bg-gray-100">
                                    <Icon as={service.icon} boxSize={6} color="green.700" />
                                </Box>
                                <Heading as="h3" fontSize="lg" fontWeight="bold">
                                    {service.title}
                                </Heading>
                                <Text color="gray.600" fontSize="sm">
                                    {service.description}
                                </Text>
                                <Button
                                    bg="green.700"
                                    color="white"
                                    size="sm"
                                    _hover={{ bg: "green.600" }}
                                    rightIcon={<ArrowForwardIcon />}
                                    mt={2}
                                >
                                    Get Started Now
                                </Button>
                            </VStack>
                        </Box>
                    ))}
                </SimpleGrid>
            </Container>
        </Box>
    )
}

