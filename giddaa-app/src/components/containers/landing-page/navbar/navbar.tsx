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
             // borderBottom={1}
             borderStyle="solid"
             // borderColor={useColorModeValue("gray.200", "gray.900")}
             // bg={useColorModeValue("white", "gray.800")}
             position="sticky"
             top="0"
             zIndex="sticky"
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
