"use client";
import {
    Box, Button,
    Flex,
    Image,
    Input,
    InputGroup,
    Menu,
    MenuButton,
    MenuList,
    Text
} from "@chakra-ui/react";
import {FaChevronDown} from "react-icons/fa";
import EstateList from "@/app/dashboard-header/estate-list/page";
import SideNav from "@/components/containers/dashboardlayout/SideNav";
import CreateEstate from "@/components/containers/dashboardlayout/estate-card/create-estate";
import EstateDetailsHeader from "@/components/containers/dashboardlayout/estate-card/estate-details-header";
import {usePathname, useRouter} from "next/navigation";
import React from "react";

interface DashboardHeaderProps {
    children?: React.ReactNode;
}

export default function DashboardHeader({children}: DashboardHeaderProps) {
    const pathname = usePathname();
    const router = useRouter();
    const isCreateEstate = pathname.includes("create-estate");
    const isEstateDetails = pathname.includes("estate-details");

    const handleCreateEstateClick = () => {
        router.push("dashboard-header/create-estate");
    };

    const mockEstate = {
        id: 1,
        name: "The View Estate",
        type: "Two-Bedroom Apartment",
        location: "Federal Capital Territory",
        city: "Abuja",
        address: "No. 25 Kenzie Kurmash, Abuja",
        popularLandmark: "NNPC Fueling Station",
        completionStatus: "Completed",
        landSize: "2 Hectares",
        description: "The property is a really nice and beautiful place. We think you should buy it because it is the best thing you could ever buy in your life for real just buy this house. It will be good for",
        videoUrl: "https://gddaxyoutube.com",
        numberOfFloors: "2 Floors",
        images: [
            {url: "/img/estate1.jpg", label: "Site View"},
            {url: "/img/estate2.jpg", label: "Actual Image"},
            {url: "/img/estate3.jpg", label: "Site View"}
        ]
    };

    return (
        <Flex w="full" h="full" overflowY="auto">
            <Box w="220px" h="100vh" bg="gray.100" flexShrink={0} position="fixed" left={0} top={0}>
                <SideNav/>
            </Box>

            <Box
                flex={1}
                ml="250px"
                p='2%'
            >
                <Box px='3%' mt="-2%">
                    {!isCreateEstate && !isEstateDetails && (
                        <HeaderSection onCreateEstateClick={handleCreateEstateClick}/>
                    )}
                </Box>
                <Box px='3%'>
                    {isEstateDetails ? (
                        <EstateDetailsHeader estate={mockEstate}/>
                    ) : isCreateEstate ? (
                        <CreateEstate/>
                    ) : (
                        <EstateList onCreateEstateClick={handleCreateEstateClick}/>
                    )}
                </Box>
            </Box>
        </Flex>
    );
}

interface HeaderSectionProps {
    onCreateEstateClick: () => void;
}

function HeaderSection({onCreateEstateClick}: HeaderSectionProps) {
    return (
        <Flex justifyContent="space-between" alignItems="center" position="relative">

            <Flex alignItems="center" gap={4}>
                <Image
                    src="/img/BackAndForwardButtons.png"
                    alt="backButton"
                    width="41px"
                    height="16px"
                />
                <Text fontWeight={500} fontSize={14} color='#000000'>My Properties</Text>
            </Flex>

            <Box
                position="absolute"
                left="50%"
                transform="translateX(-50%)"
                w="300px"
                h="36px"
                bg="#F0F0F0"
                borderRadius="100px"
                display="flex"
                alignItems="center"
                px={4}
                justifyContent="center"
            >
                <InputGroup alignItems="center" p={2} gap={4}>
                    <Image
                        src="/img/search.png"
                        alt="search"
                        width="15px"
                        height="15px"
                    />
                    <Input
                        placeholder="Search..."
                        fontWeight={400}
                        fontSize={12}
                        color='#4B4B4B'
                        bg="transparent"
                        border="none"
                        outline="none"
                        _focus={{boxShadow: "none"}}
                        _placeholder={{color: "gray.500"}}
                    />
                </InputGroup>
            </Box>

            <Flex justifyContent="flex-end" alignItems="center" gap={6}>
                <Menu>
                    <MenuButton
                        as={Button}
                        rightIcon={<FaChevronDown cursor='pointer'/>}
                        bg="#F0F0F0"
                        w="130px"
                        h="36px"
                        borderRadius="100px"
                        border="none"
                    >
                        <Flex align="center" justify="center" gap={2}>
                            <Image src="/img/vid.png" alt="vid" width="16px" height="18px"/>
                            <Text fontWeight={700} fontSize={11}>How It Works</Text>
                        </Flex>
                    </MenuButton>

                    <MenuList p="10px" minW="120px" bg="white" h="70px" borderRadius="10px"
                              border="1px solid #E1E1E1" cursor="pointer">
                        <Flex gap={6} alignItems="center">
                            <Image src="/img/vid.png" alt="vid" width="16px" height="18px"/>
                            <Text fontWeight={500} fontSize={12} color='#000000'> Product Tour</Text>
                        </Flex>
                        <Flex gap={6} alignItems="center">
                            <Image src="/img/videoplay.png" alt="video" width="16px" height="18px"/>
                            <Text fontWeight={500} fontSize={12} color='#000000'>Video Tutorial</Text>
                        </Flex>
                    </MenuList>
                </Menu>


                <Flex cursor="pointer" gap={4}>
                    <Flex w="30px" h="30px" bg="#F0F0F0" borderRadius="10px" alignItems="center"
                          justifyContent="center">
                        <Image src="/img/bell.png" alt="bell" width="16px" height="18px"/>
                    </Flex>
                    <Flex w="30px" h="30px" bg="#F0F0F0" borderRadius="10px" alignItems="center"
                          justifyContent="center">
                        <Image src="/img/clock.png" alt="clock" width="16px" height="18px"/>
                    </Flex>
                    <Flex w="30px" h="30px" bg="#F0F0F0" borderRadius="10px" alignItems="center"
                          justifyContent="center">
                        <Image src="/img/arrow.png" alt="arrow" width="16px" height="18px"/>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    );
}

// "use client"
//
// import type React from "react"
// import { Box, Button, Flex, Image, Input, InputGroup, Menu, MenuButton, MenuList, Text } from "@chakra-ui/react"
// import { FaChevronDown } from "react-icons/fa"
// import dynamic from "next/dynamic"
// import { usePathname, useRouter } from "next/navigation"
// import SideNav from "@/components/containers/dashboardlayout/SideNav"
// import EstateDetailsHeader from "@/components/containers/dashboardlayout/estate-card/estate-details-header"
//
// // Dynamically import components that need client-side rendering
// const EstateList = dynamic(() => import("@/app/dashboard-header/estate-list/page"), { ssr: false })
// const CreateEstate = dynamic(() => import("@/components/containers/dashboardlayout/estate-card/create-estate"), {
//     ssr: false,
// })
//
// interface DashboardHeaderProps {
//     children?: React.ReactNode
// }
//
// export default function DashboardHeader({ children }: DashboardHeaderProps) {
//     const pathname = usePathname()
//     const router = useRouter()
//     const isCreateEstate = pathname.includes("create-estate")
//     const isEstateDetails = pathname.includes("estate-details")
//
//     const handleCreateEstateClick = () => {
//         router.push("/dashboard-header/create-estate")
//     }
//
//     // Mock estate data for EstateDetailsHeader
//     const mockEstate = {
//         id: 1,
//         name: "The View Estate",
//         type: "Two-Bedroom Apartment",
//         location: "Federal Capital Territory",
//         city: "Abuja",
//         address: "No. 25 Kenzie Kurmash, Abuja",
//         popularLandmark: "NNPC Fueling Station",
//         completionStatus: "Completed",
//         landSize: "2 Hectares",
//         description:
//             "The property is a really nice and beautiful place. We think you should buy it because it is the best thing you could ever buy in your life for real just buy this house. It will be good for",
//         videoUrl: "https://gddaxyoutube.com",
//         numberOfFloors: "2 Floors",
//         images: [
//             { url: "/img/estate1.jpg", label: "Site View" },
//             { url: "/img/estate2.jpg", label: "Actual Image" },
//             { url: "/img/estate3.jpg", label: "Site View" },
//         ],
//     }
//
//     return (
//         <Flex position="relative" minHeight="100vh">
//             {/* Sidebar */}
//             <Box width="220px" height="100vh" bg="gray.100" position="fixed" left={0} top={0} zIndex={20}>
//                 <SideNav />
//             </Box>
//
//             {/* Main Content Area */}
//             <Box position="relative" marginLeft="220px" width="calc(100% - 220px)" minHeight="100vh" bg="white" px="8%">
//                 <Box py={6} maxWidth="1600px" mx="auto" width="100%">
//                     {/* Header Section (Conditionally Rendered) */}
//                     {!isCreateEstate && !isEstateDetails && <HeaderSection onCreateEstateClick={handleCreateEstateClick} />}
//
//                     {/* Main Content (Conditionally Rendered) */}
//                     <Box mt={8} px={4}>
//                         {isEstateDetails ? (
//                             <EstateDetailsHeader estate={mockEstate} />
//                         ) : isCreateEstate ? (
//                             <CreateEstate onCreateEstateClick={handleCreateEstateClick} />
//                         ) : (
//                             <EstateList onCreateEstateClick={handleCreateEstateClick} />
//                         )}
//                     </Box>
//                 </Box>
//             </Box>
//         </Flex>
//     )
// }
//
// interface HeaderSectionProps {
//     onCreateEstateClick: () => void
// }
//
// function HeaderSection({ onCreateEstateClick }: HeaderSectionProps) {
//     return (
//         <Flex justifyContent="space-between" alignItems="center" width="100%" position="relative">
//             {/* Left Section */}
//             <Flex alignItems="center" gap={4}>
//                 <Image src="/img/BackAndForwardButtons.png" alt="backButton" width="41px" height="16px" />
//                 <Text fontWeight={500} fontSize={14} color="#000000">
//                     My Properties
//                 </Text>
//             </Flex>
//
//             {/* Search Bar */}
//             <Box
//                 position={{ base: "relative", md: "absolute" }}
//                 left={{ md: "50%" }}
//                 transform={{ md: "translateX(-50%)" }}
//                 width={{ base: "100%", md: "300px" }}
//                 height="36px"
//                 bg="#F0F0F0"
//                 borderRadius="100px"
//                 display={{ base: "none", md: "flex" }}
//                 alignItems="center"
//                 px={4}
//                 justifyContent="center"
//             >
//                 <InputGroup alignItems="center" p={2} gap={4}>
//                     <Image src="/img/search.png" alt="search" width="15px" height="15px" />
//                     <Input
//                         placeholder="Search..."
//                         fontWeight={400}
//                         fontSize={12}
//                         color="#4B4B4B"
//                         bg="transparent"
//                         border="none"
//                         outline="none"
//                         _focus={{ boxShadow: "none" }}
//                         _placeholder={{ color: "gray.500" }}
//                     />
//                 </InputGroup>
//             </Box>
//
//             {/* Right Section */}
//             <Flex justifyContent="flex-end" alignItems="center" gap={6}>
//                 {/* How It Works Dropdown */}
//                 <Menu>
//                     <MenuButton
//                         as={Button}
//                         rightIcon={<FaChevronDown cursor="pointer" />}
//                         bg="#F0F0F0"
//                         width="130px"
//                         height="36px"
//                         borderRadius="100px"
//                         border="none"
//                     >
//                         <Flex align="center" justify="center" gap={2}>
//                             <Image src="/img/vid.png" alt="vid" width="16px" height="18px" />
//                             <Text fontWeight={700} fontSize={11}>
//                                 How It Works
//                             </Text>
//                         </Flex>
//                     </MenuButton>
//
//                     <MenuList
//                         p="10px"
//                         minW="120px"
//                         bg="white"
//                         h="70px"
//                         borderRadius="10px"
//                         border="1px solid #E1E1E1"
//                         cursor="pointer"
//                     >
//                         <Flex gap={6} alignItems="center">
//                             <Image src="/img/vid.png" alt="vid" width="16px" height="18px" />
//                             <Text fontWeight={500} fontSize={12} color="#000000">
//                                 {" "}
//                                 Product Tour
//                             </Text>
//                         </Flex>
//                         <Flex gap={6} alignItems="center">
//                             <Image src="/img/videoplay.png" alt="video" width="16px" height="18px" />
//                             <Text fontWeight={500} fontSize={12} color="#000000">
//                                 Video Tutorial
//                             </Text>
//                         </Flex>
//                     </MenuList>
//                 </Menu>
//
//                 {/* Icons */}
//                 <Flex cursor="pointer" gap={4}>
//                     <Flex w="30px" h="30px" bg="#F0F0F0" borderRadius="10px" alignItems="center" justifyContent="center">
//                         <Image src="/img/bell.png" alt="bell" width="16px" height="18px" />
//                     </Flex>
//                     <Flex w="30px" h="30px" bg="#F0F0F0" borderRadius="10px" alignItems="center" justifyContent="center">
//                         <Image src="/img/clock.png" alt="clock" width="16px" height="18px" />
//                     </Flex>
//                     <Flex w="30px" h="30px" bg="#F0F0F0" borderRadius="10px" alignItems="center" justifyContent="center">
//                         <Image src="/img/arrow.png" alt="arrow" width="16px" height="18px" />
//                     </Flex>
//                 </Flex>
//             </Flex>
//         </Flex>
//     )
// }



