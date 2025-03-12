import type React from "react"
import {
    Box,
    Container,
    SimpleGrid,
    Stack,
    Text,
    Heading,
    Input,
    Button,
    Flex,
    Link,
    IconButton,
    InputGroup,
    Divider,
    ChakraProvider,
    extendTheme,
} from "@chakra-ui/react"
import { FaInstagram, FaTiktok, FaFacebook, FaTwitter, FaWhatsapp } from "react-icons/fa"

const footerTheme = extendTheme({
    colors: {
        green: {
            900: "#335F32",
            800: "#335F32",
        },
        gray: {
            300: "#D1D5DB",
            600: "#4B5563",
        },
        white: "#FFFFFF",
        black: "#000000",
    },
    components: {
        Button: {
            baseStyle: {
                fontWeight: "medium",
            },
        },
        Input: {
            variants: {
                outline: {
                    field: {
                        borderRadius: "full",
                    },
                },
            },
        },
        IconButton: {
            baseStyle: {
                borderRadius: "full",
            },
        },
    },
})

interface FooterLinkProps {
    children: React.ReactNode
}

const FooterLink: React.FC<FooterLinkProps> = ({ children }) => {
    return (
        <Link
            href="#"
            color="white"
            fontSize="sm"
            _hover={{ textDecoration: "none", color: "gray.300" }}
            mb={2}
            display="block"
        >
            {children}
        </Link>
    )
}

interface FooterColumnProps {
    heading: string
    links: string[]
}

const FooterColumn: React.FC<FooterColumnProps> = ({ heading, links }) => {
    return (
        <Stack>
            <Heading as="h4" size="sm" color="white" fontWeight="bold" mb={4}>
                {heading}
            </Heading>
            {links.map((link, index) => (
                <FooterLink key={index}>{link}</FooterLink>
            ))}
        </Stack>
    )
}


export default function Footer() {
    const footerSections = [
        {
            heading: "ABOUT US",
            links: ["Our Company", "Our Team"],
        },
        {
            heading: "PRODUCTS",
            links: ["Buy", "Short Lets", "Invest", "Sell Your House"],
        },
        {
            heading: "PARTNERS",
            links: ["Join as a Property Developer", "Join as a Lender", "Join as an Agent"],
        },
        {
            heading: "RESOURCES",
            links: ["Tutorials", "Blog"],
        },
        {
            heading: "CONTACT US",
            links: ["info@gidaa.com", "WhatsApp", "Book a Meeting", "+234 809 762 1791"],
        },
        {
            heading: "SITE NAVIGATION",
            links: ["Home", "Properties", "Developers", "Sell House"],
        },
    ]

    return (
        <ChakraProvider theme={footerTheme}>
            <Box bg="#1B5E20" color="white" py={12}
                 position="relative"
                 bottom={0}
                 left={0}
                 right={0}
                 width="100%"
                 marginBottom={0}
                 paddingBottom={0}
            >
                <Container maxW="6xl" mt="auto" pb='18%'>
                    <Stack spacing={8}>
                        <Flex
                            direction={{ base: "column", md: "row" }}
                            justify="space-between"
                            align={{ base: "flex-start", md: "center" }}
                            mb={8}
                        >
                            <Box mb={{ base: 4, md: 0 }}>
                                <Heading as="h3" size="md" mb={2}>
                                    Join Our Newsletter
                                </Heading>
                                <Text fontSize="sm">Stay up to date with news and updates by subscribing to our newsletter</Text>
                            </Box>
                            <Flex>
                                <InputGroup size="md">
                                    <Input
                                        placeholder="Enter your email address"
                                        bg="white"
                                        color="black"
                                        borderRadius="full"
                                        mr={2}
                                        width={{ base: "full", md: "300px" }}
                                    />
                                    <Button bg="white" color="black" borderRadius="full" size="md">
                                        Subscribe
                                    </Button>
                                </InputGroup>
                            </Flex>
                        </Flex>

                        <SimpleGrid columns={{ base: 2, md: 3, lg: 6 }} spacing={8}>
                            {footerSections.map((section, index) => (
                                <FooterColumn key={index} heading={section.heading} links={section.links} />
                            ))}
                        </SimpleGrid>

                        <Flex justify="center" mt={8}>
                            <Stack direction="row" spacing={4}>
                                <IconButton
                                    aria-label="Instagram"
                                    icon={<FaInstagram />}
                                    isRound
                                    bg="white"
                                    color="#1B5E20"
                                    size="md"
                                />
                                <IconButton aria-label="TikTok" icon={<FaTiktok />} isRound bg="white" color="#1B5E20" size="md" />
                                <IconButton aria-label="Facebook" icon={<FaFacebook />} isRound bg="white" color="#1B5E20" size="md" />
                                <IconButton aria-label="Twitter" icon={<FaTwitter />} isRound bg="white" color="#1B5E20" size="md" />
                            </Stack>
                        </Flex>

                        <Flex justify="center" mt={4}>
                            <Button leftIcon={<FaWhatsapp />} bg="white" color="#1B5E20" borderRadius="full" px={6}>
                                Join Our Community
                            </Button>
                        </Flex>
                        <Box mt='-18%'>
                            <Divider my={6} borderColor="#FFFFFF" mt='20%' />
                        </Box>
                        <Flex
                            direction={{ base: "column", md: "row" }}
                            justify="space-between"
                            align={{ base: "center", md: "center" }}
                            fontSize="sm"
                            mb='1%'
                            mt='-4%'
                        >
                            <Box><Text>PROPERTY OF GIDAA INC.</Text></Box>
                            <Flex>
                                <Link href="#" mr={4} color="white" _hover={{ color: "gray.300" }}>
                                    Privacy Policy
                                </Link>
                                <Link href="#" color="white" _hover={{ color: "gray.300" }}>
                                    Terms & Conditions
                                </Link>
                            </Flex>
                        </Flex>
                    </Stack>
                </Container>
            </Box>
        </ChakraProvider>
    )
}