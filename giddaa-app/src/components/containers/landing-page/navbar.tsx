// "use client"
//
// import React, { useState } from "react"
// import Link from "next/link"
// import {
//     Box,
//     Flex,
//     Text,
//     IconButton,
//     Button,
//     Stack,
//     Collapse,
//     Icon,
//     Popover,
//     PopoverTrigger,
//     PopoverContent,
//     useColorModeValue,
//     useDisclosure,
//     Input,
//     InputGroup,
//     InputLeftElement,
//     Avatar,
//     Menu,
//     MenuButton,
//     MenuList,
//     MenuItem,
//     Container, Image, HStack,
// } from "@chakra-ui/react"
// import { HamburgerIcon, CloseIcon, ChevronDownIcon, ChevronRightIcon, SearchIcon } from "@chakra-ui/icons"
//
// export default function Navbar() {
//     const { isOpen, onToggle } = useDisclosure()
//     const [currency, setCurrency] = useState("USD")
//
//     return (
//         <Box
//             borderBottom={1}
//             borderStyle="solid"
//             borderColor={useColorModeValue("gray.200", "gray.900")}
//             bg={useColorModeValue("white", "gray.800")}
//             position="sticky"
//             top="0"
//             zIndex="sticky"
//         >
//             <Container maxW="container.xl">
//                 <Flex
//                     color={useColorModeValue("gray.600", "white")}
//                     minH="60px"
//                     py={{ base: 2 }}
//                     px={{ base: 4 }}
//                     align="center"
//                     justify="space-between"
//                 >
//
//                     <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }} align="center">
//                         <Link href="/" passHref>
//                             <Flex align="center" cursor="pointer">
//                                 <Box className="flex items-center">
//                                     <Image src="/img/GreenLogo.png" alt="logo" w="99.91px" h="39px" />
//                                 </Box>
//                             </Flex>
//                         </Link>
//
//                         <Flex ml="6%" display={{ base: "none", md: "flex" }}>
//                             <InputGroup>
//                                 <InputLeftElement pointerEvents="none">
//                                     <SearchIcon color="gray.400" />
//                                 </InputLeftElement>
//                                 <Input type="text"
//                                        placeholder="Search for anything"
//                                        fontWeight={400}
//                                        fontSize={12}
//                                        color='#4B4B4B'
//                                        bg="transparent"
//                                        w="189px"
//                                        h="39px"
//                                        borderRadius="100px"
//                                        border='1px solid #F0F0F0'
//                                        _focus={{ boxShadow: "none" }}
//                                        _placeholder={{ color: "gray.500" }} />
//                             </InputGroup>
//                         </Flex>
//                     </Flex>
//
//                     <Stack justify="flex-end" align="center" direction="row" spacing={6}>
//                         <Flex display={{ base: "none", md: "flex" }} ml={10}>
//                             <DesktopNav />
//                         </Flex>
//
//                         <HStack align="center">
//                             <Box w="1px" h="40px" bg="#D9D9D9" />
//                             <Text fontWeight={700} fontSize='12px' color='#335F32'>Refer & Earn</Text>
//                             <Box w="1px" h="40px" bg="#D9D9D9" />
//                         </HStack>
//
//                         <Menu>
//                             <MenuButton
//                                 as={Button}
//                                 border='1px solid #D9D9D9'
//                                 borderRadius='100px'
//                                 w='84px'
//                                 h='31px'
//                                 variant="ghost"
//                                 size="sm"
//                                 fontWeight="bold"
//                                 display={{ base: "none", md: "inline-flex" }}
//                                 // border='none'
//                                 outline="none"
//                                 boxShadow="none"
//                                 _focus={{ border: "none", boxShadow: "none" }}
//                                 _hover={{ border: "none" }}
//                                 _active={{ border: "none" }}
//                                 bg="transparent"
//                                 cursor='pointer'
//                             >
//                                 {currency} <ChevronDownIcon />
//                             </MenuButton>
//                             <MenuList>
//                                 <MenuItem onClick={() => setCurrency("USD")}>USD</MenuItem>
//                                 <MenuItem onClick={() => setCurrency("NGN")}>NGN</MenuItem>
//                                 <MenuItem onClick={() => setCurrency("EUR")}>EUR</MenuItem>
//                                 <MenuItem onClick={() => setCurrency("GBP")}>GBP</MenuItem>
//                             </MenuList>
//                         </Menu>
//
//                         <Avatar size="sm" src="/placeholder.svg?height=40&width=40" />
//
//                         <IconButton
//                             display={{ base: "flex", md: "none" }}
//                             onClick={onToggle}
//                             icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
//                             variant="ghost"
//                             aria-label="Toggle Navigation"
//                         />
//                     </Stack>
//                 </Flex>
//
//                 <Collapse in={isOpen} animateOpacity>
//                     <MobileNav />
//                 </Collapse>
//             </Container>
//         </Box>
//     )
// }
//
// const DesktopNav = () => {
//     const [activeMenu, setActiveMenu] = useState("Buy");
//     const [openSubmenu, setOpenSubmenu] = useState(null); // Track open submenu
//     const linkColor = useColorModeValue("gray.600", "gray.200");
//     const linkHoverColor = useColorModeValue("gray.800", "white");
//     const activeColor = "#346633";
//
//     return (
//         <Stack direction="row" spacing={4}>
//             {NAV_ITEMS.map((navItem) => (
//                 <Box
//                     key={navItem.label}
//                     onMouseEnter={() => setOpenSubmenu(navItem.label)}
//                     onMouseLeave={() => setOpenSubmenu(null)}
//                     onClick={() => setActiveMenu(navItem.label)}
//                 >
//                     <Popover trigger="hover" placement="bottom-start">
//                         <PopoverTrigger>
//                             <Link href={navItem.href ?? "#"} passHref>
//                                 <Box
//                                     p={2}
//                                     fontSize="sm"
//                                     fontWeight={500}
//                                     color={activeMenu === navItem.label ? activeColor : linkColor}
//                                     _hover={{
//                                         textDecoration: "none",
//                                         color: linkHoverColor,
//                                     }}
//                                     className="flex flex-col items-center"
//                                 >
//                                     {navItem.label}
//                                     {activeMenu === navItem.label && (
//                                         <Box mt="2px" h="3px" w="80%" bg={activeColor} mx="auto" borderRadius="5px"></Box>
//                                     )}
//                                 </Box>
//                             </Link>
//                         </PopoverTrigger>
//
//                         {navItem.children && openSubmenu === navItem.label && (
//                             <PopoverContent border={0} boxShadow="xl" bg="white" p={4} rounded="xl" minW="sm">
//                                 <Stack>
//                                     {navItem.children.map((child) => (
//                                         <DesktopSubNav key={child.label} {...child} />
//                                     ))}
//                                 </Stack>
//                             </PopoverContent>
//                         )}
//                     </Popover>
//                 </Box>
//             ))}
//         </Stack>
//     );
// };
//
//
//
// const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
//     return (
//         <Link href={href ?? "#"} passHref>
//             <Box role="group" display="block" p={2} rounded="md" _hover={{ bg: useColorModeValue("green.50", "gray.900") }}>
//                 <Stack direction="row" align="center">
//                     <Box>
//                         <Text transition="all .3s ease" _groupHover={{ color: "green.700" }} fontWeight={500}>
//                             {label}
//                         </Text>
//                         <Text fontSize="sm">{subLabel}</Text>
//                     </Box>
//                     <Flex
//                         transition="all .3s ease"
//                         transform="translateX(-10px)"
//                         opacity={0}
//                         _groupHover={{ opacity: 100, transform: "translateX(0)" }}
//                         justify="flex-end"
//                         align="center"
//                         flex={1}
//                     >
//                         <Icon color="green.700" w={5} h={5} as={ChevronRightIcon} />
//                     </Flex>
//                 </Stack>
//             </Box>
//         </Link>
//     )
// }
//
// const MobileNav = () => {
//     return (
//         <Stack bg={useColorModeValue("white", "gray.800")} p={4} display={{ md: "none" }}>
//             {NAV_ITEMS.map((navItem) => (
//                 <MobileNavItem key={navItem.label} {...navItem} />
//             ))}
//         </Stack>
//     )
// }
//
// const MobileNavItem = ({ label, children, href }: NavItem) => {
//     const { isOpen, onToggle } = useDisclosure();
//     const [activeMenu, setActiveMenu] = useState("Buy");
//     const activeColor = "#346633";
//
//     return (
//         <Stack spacing={4} onClick={() => setActiveMenu(label)}>
//             <Flex
//                 py={2}
//                 as={Link}
//                 href={href ?? "#"}
//                 justify="space-between"
//                 align="center"
//                 _hover={{
//                     textDecoration: "none",
//                 }}
//             >
//                 <Text fontWeight={600} color={activeMenu === label ? activeColor : "gray.600"}>
//                     {label}
//                 </Text>
//                 {children && (
//                     <Icon
//                         as={ChevronDownIcon}
//                         transition="all .25s ease-in-out"
//                         transform={isOpen ? "rotate(180deg)" : ""}
//                         w={6}
//                         h={6}
//                         onClick={onToggle}
//                     />
//                 )}
//             </Flex>
//
//             {activeMenu === label && (
//                 <Box mt="2px" h="3px" w="80%" bg={activeColor} mx="auto" borderRadius="5px"></Box>
//             )}
//
//             <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
//                 <Stack borderStyle="solid" borderColor={useColorModeValue("gray.200", "gray.700")} align="start">
//                     {children &&
//                         children.map((child) => (
//                             <Box key={child.label} textAlign="center">
//                                 <Link href={child.href ?? "#"} passHref>
//                                     <Box
//                                         py={2}
//                                         fontSize="sm"
//                                         fontWeight={500}
//                                         color={activeMenu === child.label ? activeColor : "gray.600"}
//                                         _hover={{ color: activeColor }}
//                                     >
//                                         {child.label}
//                                     </Box>
//                                 </Link>
//                             </Box>
//                         ))}
//                 </Stack>
//             </Collapse>
//         </Stack>
//     );
// };
//
//
//
// interface NavItem {
//     label: string
//     subLabel?: string
//     children?: Array<NavItem>
//     href?: string
// }
//
// const NAV_ITEMS: Array<NavItem> = [
//     {
//         label: "Buy",
//         href: "#",
//         children: [
//             {
//                 label: "Residential Properties",
//                 subLabel: "Find your dream home",
//                 href: "#",
//             },
//             {
//                 label: "Commercial Properties",
//                 subLabel: "Office spaces and retail outlets",
//                 href: "#",
//             },
//         ],
//     },
//     {
//         label: "Short-lets",
//         href: "#",
//         children: [
//             {
//                 label: "Vacation Rentals",
//                 subLabel: "Short-term stays for holidays",
//                 href: "#",
//             },
//             {
//                 label: "Business Stays",
//                 subLabel: "Comfortable spaces for work trips",
//                 href: "#",
//             },
//         ],
//     },
//
//     {
//         label: "Sell",
//         href: "#",
//         children: [
//             {
//                 label: "Vacation Rentals",
//                 subLabel: "Short-term stays for holidays",
//                 href: "#",
//             },
//             {
//                 label: "Business Stays",
//                 subLabel: "Comfortable spaces for work trips",
//                 href: "#",
//             },
//         ],
//     },
//
//     {
//         label: "Invest",
//         href: "#",
//         children: [
//             {
//                 label: "Vacation Rentals",
//                 subLabel: "Short-term stays for holidays",
//                 href: "#",
//             },
//             {
//                 label: "Business Stays",
//                 subLabel: "Comfortable spaces for work trips",
//                 href: "#",
//             },
//         ],
//     },
//
//     {
//         label: "Services",
//         href: "#",
//         children: [
//             {
//                 label: "Vacation Rentals",
//                 subLabel: "Short-term stays for holidays",
//                 href: "#",
//             },
//             {
//                 label: "Business Stays",
//                 subLabel: "Comfortable spaces for work trips",
//                 href: "#",
//             },
//         ],
//     },
//
//     {
//         label: "Enterprise",
//         href: "#",
//         children: [
//             {
//                 label: "Vacation Rentals",
//                 subLabel: "Short-term stays for holidays",
//                 href: "#",
//             },
//             {
//                 label: "Business Stays",
//                 subLabel: "Comfortable spaces for work trips",
//                 href: "#",
//             },
//         ],
//     },
//     {
//         label: "Agents & Realtors",
//         href: "#",
//         children: [
//             {
//                 label: "Vacation Rentals",
//                 subLabel: "Short-term stays for holidays",
//                 href: "#",
//             },
//             {
//                 label: "Business Stays",
//                 subLabel: "Comfortable spaces for work trips",
//                 href: "#",
//             },
//         ],
//     },
//
// ]
//

"use client";

import React, { useState } from "react";
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
    Box,
    Flex,
    HStack,
    Text,
    Select,
    Input,
    Image,
    InputGroup, useColorModeValue
} from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa";

const menuItems = ["Buy", "Shortlets", "Sell", "Invest", "Services", "Enterprise", "Agents & Realtors"];

const currencyOptions = [
    { value: "USD", label: <HStack><Image src="/img/usd-flag.png" alt="USD" w="20px" h="15px" /> <Text>USD</Text></HStack> },
    { value: "EUR", label: <HStack><Image src="/img/euro-flag.png" alt="EUR" w="20px" h="15px" /> <Text>EUR</Text></HStack> },
    { value: "GBP", label: <HStack><Image src="/img/gbp-flag.png" alt="GBP" w="20px" h="15px" /> <Text>GBP</Text></HStack> }
];

const Navbar = () => {
    // const [currency, setCurrency] = useState("USD");
    // const [currency, setCurrency] = useState(currencyOptions[0]);
    const [currency, setCurrency] = useState("USD")

    const [activeMenu, setActiveMenu] = useState("Buy");

    return (
        <Box bg='#FCFCFC' w='full'
            // // borderBottom={1}
            //  borderStyle="solid"
            // // borderColor={useColorModeValue("gray.200", "gray.900")}
            // // bg={useColorModeValue("white", "gray.800")}
             position="sticky"
             top="0"
             zIndex="10000"
        >
            <Flex
                justifyContent='space-evenly'
                align="center"
                minH="60px"
                py={{ base: 2 }}
                px={{ base: 4 }}
                // justify="space-between"
                className="max-w-7xl mx-auto">
                <Image src="/img/GreenLogo.png" alt="logo" w="99.91px" h="39px" />

                <Flex alignItems="center" gap={10}>
                    <Box
                        w="189px"
                        h="39px"
                        bg="#FFFFFF"
                        borderRadius="100px"
                        border='1px solid #F0F0F0'
                    >
                        <InputGroup alignItems="center" p={10} gap={6}>
                            <Image
                                src="/img/search.png"
                                alt="search"
                                width="15px"
                                height="15px"
                            />
                            <Input
                                placeholder="Search for anything..."
                                fontWeight={400}
                                fontSize={12}
                                color='#4B4B4B'
                                bg="transparent"
                                border="none"
                                outline="none"
                                _focus={{ boxShadow: "none" }}
                                _placeholder={{ color: "gray.500" }}
                            />
                        </InputGroup>
                    </Box>


                    <HStack spacing={6} className="hidden lg:flex">
                        {menuItems.map((item) => (
                            <Box key={item} textAlign="center">
                                <Menu>
                                    <MenuButton
                                        as={Button}
                                        rightIcon={<FaChevronDown cursor='pointer' size={10} />}
                                        border="none"
                                        bg="none"
                                        fontWeight={activeMenu === item ? 600 : 400}
                                        fontSize={12}
                                        color={activeMenu === item ? "#346633" : "#4B4B4B"}
                                        _focus={{ boxShadow: "none" }}
                                        onClick={() => setActiveMenu(item)}
                                    >
                                        {item}
                                    </MenuButton>
                                    <MenuList>
                                        <MenuItem>Option 1</MenuItem>
                                        <MenuItem>Option 2</MenuItem>
                                    </MenuList>
                                </Menu>


                                {activeMenu === item && (
                                    <Box mt="2px" h="3px" w="80%" bg="#346633" mx="auto" borderRadius="5px"></Box>
                                )}
                            </Box>
                        ))}
                        <HStack spacing={10} align="center">
                            <Box w="1px" h="40px" bg="#D9D9D9" />
                            <Text fontWeight={700} fontSize='12px' color='#335F32'>Refer & Earn</Text>
                            <Box w="1px" h="40px" bg="#D9D9D9" />
                        </HStack>

                    </HStack>

                    <HStack border='1px solid #D9D9D9' borderRadius='100px' w='84px' h='31px'>
                        <Select
                            // value={currency}
                            // options={currencyOptions}
                            // onChange={setCurrency}
                            // isSearchable={false}
                            size="sm"
                            border='none'
                            outline="none"
                            boxShadow="none"
                            _focus={{ border: "none", boxShadow: "none" }}
                            _hover={{ border: "none" }}
                            _active={{ border: "none" }}
                            bg="transparent"
                            cursor='pointer'
                        >
                            <option value="USD">USD</option>
                            <option value="EUR">EUR</option>
                            <option value="GBP">GBP</option>
                        </Select>
                    </HStack>
                </Flex>
                <Image src="/img/avaterImg.png" alt="avaterImg" w="32px" h="32px" />
            </Flex>
            <Box border='1px solid #D9D9D9' w='full' mt='1%' />
        </Box>
    );
};

export default Navbar;
