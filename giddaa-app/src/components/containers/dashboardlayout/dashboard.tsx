'use client';

import { Box, Button, Flex, Grid, Image, Input, Link, Menu, MenuButton, MenuItem, MenuList, Text, VStack, IconButton } from "@chakra-ui/react";
import { FiMoreVertical, FiSearch, FiBell, FiSettings } from "react-icons/fi";
import { useState } from "react";

const estates = [
    { id: 1, name: "Paradise Estate", location: "No 13 Fisher Street, Wuse II, Abuja", houses: 16, image: "/img/house1.jpg" },
    { id: 2, name: "Paradise Estate", location: "No 13 Fisher Street, Wuse II, Abuja", houses: 16, image: "/img/house2.jpg" },
    { id: 3, name: "Paradise Estate", location: "No 13 Fisher Street, Wuse II, Abuja", houses: 16, image: "/img/house3.jpg" },
    { id: 4, name: "Paradise Estate", location: "No 13 Fisher Street, Wuse II, Abuja", houses: 16, image: "/img/house4.jpg" },
];

export default function Dashboard() {
    const [search, setSearch] = useState("");

    return (
        <Flex h="100vh" w="100vw" overflowX="hidden" flexDirection={{ base: "column", md: "row" }}>

            {/* Main Content */}
            <Box flex="1" p={6}>
                {/* Header */}
                <Flex justify="space-between" align="center" mb={6}>
                    <Text fontSize="2xl" fontWeight="bold">My Properties</Text>
                    <Flex gap={4}>
                        <Input placeholder="Search for anything..." w={{ base: "150px", md: "300px" }} />
                        <IconButton icon={<FiSearch />} aria-label="Search" />
                        <IconButton icon={<FiBell />} aria-label="Notifications" />
                        <Menu>
                            <MenuButton as={Button}>
                                How It Works
                            </MenuButton>
                            <MenuList>
                                <MenuItem>Product Tour & Guide</MenuItem>
                                <MenuItem>Video Tutorial</MenuItem>
                            </MenuList>
                        </Menu>
                        <Button colorScheme="green">+ Create Estate</Button>
                    </Flex>
                </Flex>

                {/* Estates List */}
                <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }} gap={6}>
                    {estates.map((estate) => (
                        <Box key={estate.id} p={4} boxShadow="md" borderRadius="md" bg="white">
                            <Image src={estate.image} alt={estate.name} borderRadius="md" />
                            <Text mt={2} fontWeight="bold">{estate.name}</Text>
                            <Text fontSize="sm">{estate.location}</Text>
                            <Text fontSize="sm" color="gray.500">{estate.houses} Houses</Text>
                            <Menu>
                                <MenuButton as={IconButton} icon={<FiMoreVertical />} variant="ghost" />
                                <MenuList>
                                    <MenuItem>View House</MenuItem>
                                    <MenuItem>Edit Estate</MenuItem>
                                    <MenuItem>Add House</MenuItem>
                                    <MenuItem color="red">Delete Estate</MenuItem>
                                </MenuList>
                            </Menu>
                        </Box>
                    ))}
                </Grid>
            </Box>
        </Flex>
    );
}
