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
import { FaChevronDown } from "react-icons/fa";
import EstateList from "@/components/containers/dashboardlayout/estate-card/estate-list";


export default function DashboardHeader() {
    return (
        <Box
            overflowX="hidden"
            flexDirection={{ base: "column", md: "row" }}
            py={16}
            w="100%"
            maxW="95%"
            mx="auto"
            px={{ base: 4, md: 10, lg: 16 }}
        >
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
                    w="374px"
                    h="36px"
                    bg="#F0F0F0"
                    borderRadius="100px"
                    display="flex"
                    alignItems="center"
                    px={4}
                    justifyContent="center"
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

                <Flex justifyContent="flex-end" alignItems="center" gap={30}>
                    <Menu>
                        <MenuButton
                            as={Button}
                            rightIcon={<FaChevronDown cursor='pointer' />}
                            bg="#F0F0F0"
                            w="151px"
                            h="36px"
                            borderRadius="100px"
                            border="none"
                        >
                            <Flex align="center" justify="center" gap={8}>
                                <Image src="/img/vid.png" alt="vid" width="16.86px" height="18px" />
                                <Text fontWeight={700} fontSize={11}>How It Works</Text>
                            </Flex>
                        </MenuButton>

                        <MenuList p="14px" minW="128px" bg="white" h='70px' borderRadius='15px'
                                  border='1px #E1E1E1 solid' mb='20px' cursor='pointer'>
                            <Flex gap={10} alignItems='center'>
                                <Image src="/img/vid.png" alt="vid" width="16.86px" height="18px" />
                                <Text fontWeight={500} fontSize={12} color='#000000'> Product Tour & Guide</Text>
                            </Flex>
                            <Flex gap={10} alignItems='center'>
                                <Image src="/img/videoplay.png" alt="video" width="16.86px" height="18px" />
                                <Text fontWeight={500} fontSize={12} color='#000000'>Video Tutorial</Text>
                            </Flex>
                        </MenuList>
                    </Menu>

                    <Flex cursor='pointer' gap={20}>
                        <Flex w='32px' h='31.13px' bg='#F0F0F0' borderRadius='15px' alignItems='center'
                              justifyContent="center">
                            <Image src="/img/bell.png" alt="bell" width="16.86px" height="18px" />
                        </Flex>
                        <Flex w='32px' h='31.13px' bg='#F0F0F0' borderRadius='15px' alignItems='center'
                              justifyContent="center">
                            <Image src="/img/clock.png" alt="clock" width="16.86px" height="18px" />
                        </Flex>
                        <Flex w='32px' h='31.13px' bg='#F0F0F0' borderRadius='15px' alignItems='center'
                              justifyContent="center">
                            <Image src="/img/arrow.png" alt="arrow" width="16.86px" height="18px" />
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
            <EstateList />
        </Box>
    );
}

